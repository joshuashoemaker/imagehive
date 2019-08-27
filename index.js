function navToIH () {
  console.log('naved')
  window.location.href = 'http://www.myimagehive.com'
}

function scrollToServices () {
  document.querySelector('#servicesAnchor').scrollIntoView({
    behavior: 'smooth'
  })
}

function scrollToHowItWorks () {
  document.querySelector('#howItWorksAnchor').scrollIntoView({
    behavior: 'smooth'
  })
}
