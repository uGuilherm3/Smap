const menuItems = document.querySelectorAll('.menu a[href^="#"],main a');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {

	window.scroll({
	top: to,
	behavior: "smooth",
	})
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 70;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

var btn1 = document.querySelector('header img')

btn1.addEventListener('click', () => {
    window.scroll({top: 0, behavior: "smooth"})
})