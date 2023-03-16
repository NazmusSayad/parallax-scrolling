const container = document.getElementById('scroll-container')
const fixer = document.getElementById('scroll-content')

const handleScroll = () => {
  const containerRect = container.getBoundingClientRect()
  if (containerRect.top > 0) {
    fixer.removeAttribute('style')
    return
  }

  if (containerRect.bottom < innerHeight) {
    const documentWidth = document.documentElement.offsetWidth
    const translateX = fixer.offsetWidth - documentWidth
    fixer.style.transform = `translateX(${-translateX}px)`
    return
  }

  fixer.style.transform = `translateX(${containerRect.top}px)`
}

const handleResize = () => {
  const width = fixer.offsetWidth
  const height = fixer.offsetHeight
  const optimalHeight = width - (innerWidth - innerHeight)

  container.style.height = `${
    optimalHeight > height ? optimalHeight : height
  }px`
}

handleResize()
window.addEventListener('resize', handleResize)
document.addEventListener('scroll', handleScroll)
