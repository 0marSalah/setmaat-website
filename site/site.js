// SetMaat site behaviour, shared by both pages. Each part checks that its elements exist on the page.
(function () {
  'use strict'

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Newsletter form. Not connected yet: send the address to a newsletter provider here.
  var newsForm = document.querySelector('[data-newsletter]')
  if (newsForm) {
    newsForm.addEventListener('submit', function (event) {
      event.preventDefault()
      document.querySelector('[data-newsletter-thanks]').textContent =
        "Thanks! Sign-ups open soon, so your address wasn't saved yet."
    })
  }

  // Header: on the home page, mark the nav link for the section the reader has scrolled to.
  var sectionLinks = Array.prototype.slice.call(document.querySelectorAll('.topbar nav a[data-section]'))
  if (sectionLinks.length) {
    var markSection = function () {
      var current = null
      sectionLinks.forEach(function (link) {
        var section = document.getElementById(link.getAttribute('data-section'))
        if (section && section.getBoundingClientRect().top <= 130) current = link
      })
      sectionLinks.forEach(function (link) {
        if (link === current) link.setAttribute('aria-current', 'true')
        else link.removeAttribute('aria-current')
      })
    }
    window.addEventListener('scroll', markSection, { passive: true })
    markSection()
  }

  // Home hero: the wallet demo. Unlock with a passkey, look at your keys, approve an app's request, then
  // revoke it. Steps match the data-step styles in styles.css. "tap" shows a finger tap on that control
  // just before moving on. With reduced motion the demo holds on the home screen.
  var screen = document.querySelector('[data-wallet-demo]')
  if (screen && !reduceMotion) {
    var tap = screen.querySelector('.tap')
    var toast = screen.querySelector('.toast')
    var steps = [
      { ms: 2200, tap: '[data-tap="unlock"]' },
      { ms: 2600 },
      { ms: 2400, tap: '[data-tap="allow"]' },
      { ms: 2600, tap: '[data-tap="toggle"]', toast: 'Access granted to Notes assistant' },
      { ms: 2400, toast: 'Access revoked' },
    ]
    var tapLead = 650
    var tapOn = function (selector) {
      var target = screen.querySelector(selector)
      var s = screen.getBoundingClientRect()
      var r = target.getBoundingClientRect()
      var scale = s.width / screen.offsetWidth || 1
      tap.style.left = (r.left - s.left + r.width / 2) / scale + 'px'
      tap.style.top = (r.top - s.top + r.height / 2) / scale + 'px'
      tap.classList.remove('go')
      void tap.offsetWidth // restart the animation
      tap.classList.add('go')
    }
    var run = function (i) {
      var step = steps[i]
      var lead = step.tap ? tapLead : 0
      screen.setAttribute('data-step', String(i))
      if (step.toast) toast.textContent = step.toast
      setTimeout(function () {
        if (step.tap) tapOn(step.tap)
        setTimeout(function () { run((i + 1) % steps.length) }, lead)
      }, step.ms - lead)
    }
    run(0)
  }

  // What we're building: "Who can reach in" switches.
  var accessRows = document.querySelectorAll('[data-access]')
  var accessCount = document.querySelector('[data-access-count]')
  Array.prototype.forEach.call(accessRows, function (row) {
    var button = row.querySelector('.switch')
    var label = row.querySelector('small')
    button.addEventListener('click', function () {
      var on = button.getAttribute('aria-checked') !== 'true'
      button.setAttribute('aria-checked', String(on))
      row.classList.toggle('off', !on)
      label.textContent = on ? row.getAttribute('data-access') : 'No access'
      var granted = document.querySelectorAll('[data-access] .switch[aria-checked="true"]').length
      accessCount.textContent = granted + ' of ' + accessRows.length
    })
  })

  // What we're building: "Export my backpack" shows a short confirmation.
  var exportButton = document.querySelector('[data-export]')
  if (exportButton) {
    var exportToast = document.querySelector('[data-export-toast]')
    var hideTimer
    exportButton.addEventListener('click', function () {
      exportToast.classList.add('show')
      clearTimeout(hideTimer)
      hideTimer = setTimeout(function () { exportToast.classList.remove('show') }, 2200)
    })
  }

  // What we're building: switch the note between what you see and what the server stores.
  var cipherButton = document.querySelector('[data-cipher]')
  if (cipherButton) {
    var note = document.querySelector('[data-note]')
    var noteWho = note.querySelector('small')
    var noteText = note.querySelector('.note-text')
    var plain = noteText.textContent
    var encrypted = 'eyJhbGciOiJFQ0RILUVTIiwiZW5jIjoiQTI1NkdDTSJ9.k3Rz9QpL0vYw7nXc2s8UaE4tJfH1mB6dG5oN'
    cipherButton.addEventListener('click', function () {
      var server = cipherButton.getAttribute('aria-pressed') !== 'true'
      cipherButton.setAttribute('aria-pressed', String(server))
      note.classList.toggle('server', server)
      noteWho.textContent = server ? 'The server sees' : 'You see'
      noteText.textContent = server ? encrypted : plain
      cipherButton.textContent = server ? 'See what you see' : 'See what the server sees'
    })
  }

  // What we're building: revoke and grant an app's access.
  var revokeButton = document.querySelector('[data-revoke]')
  if (revokeButton) {
    var grant = document.querySelector('[data-grant]')
    var grantScope = grant.querySelector('small')
    var scope = grantScope.textContent
    revokeButton.addEventListener('click', function () {
      var revoked = grant.classList.toggle('revoked')
      grantScope.textContent = revoked ? 'Access revoked' : scope
      revokeButton.textContent = revoked ? 'Grant again' : 'Revoke access'
    })
  }

  // Scroll reveals: elements marked data-reveal fade in as they scroll into view (styles in styles.css).
  // They go from data-reveal="" (hidden) to "in" (fading in) to "done", which hands hover effects back
  // to the element's own transition.
  if (reduceMotion || !('IntersectionObserver' in window)) return
  var revealed = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'))
  var show = function (el) {
    if (el.getAttribute('data-reveal')) return
    el.setAttribute('data-reveal', 'in')
    observer.unobserve(el)
    setTimeout(function () { el.setAttribute('data-reveal', 'done') }, 1000)
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) { if (entry.isIntersecting) show(entry.target) })
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  // Catches elements the observer skips, such as ones already in view or scrolled past quickly.
  var sweep = function () {
    revealed.forEach(function (el) {
      if (!el.getAttribute('data-reveal') && el.getBoundingClientRect().top < window.innerHeight * 0.95) show(el)
    })
  }
  document.documentElement.classList.add('anim-on')
  revealed.forEach(function (el) { observer.observe(el) })
  sweep()
  window.addEventListener('scroll', sweep, { passive: true })
})()
