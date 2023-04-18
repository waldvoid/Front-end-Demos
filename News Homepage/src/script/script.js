document.addEventListener('DOMContentLoaded', function() {
	const menuIcon = document.getElementById('menu-icon');
	const menu = document.getElementById('menu');

	menuIcon.addEventListener('click', function() {
		if (menu.classList.contains('hidden')) {
			setTimeout(function() {
				menu.style.transition = '1s right, .3s opacity ease-out'
				menu.classList.remove('hidden');
				menuIcon.classList.add('active');
				menuIcon.getElementsByTagName('img')[0].src = 'img/icon-menu-close.svg';
			}, 50);
		} else {
			setTimeout(function() {
				menu.style.transition = '1s right, .3s opacity ease-out'
				menu.classList.add('hidden');
				menuIcon.classList.remove('active');
				menuIcon.getElementsByTagName('img')[0].src = 'img/icon-menu.svg';
			}, 50);
		}
	})

		document.addEventListener("click", function(event) {
			const target = event.target;
		// If target is menu or menuIcon, do nothing.
		if(!menu.classList.contains('hidden')){
			if (target === menu || menu.contains(target) || target === menuIcon) {
			} else {
				// else if target is not menu or menuIcon, close menu
				setTimeout(function() {
					menu.style.transition = '1s right, .3s opacity ease-out'
					menu.classList.add('hidden');
					menuIcon.classList.remove('active');
					menuIcon.getElementsByTagName('img')[0].src = 'img/icon-menu.svg';
				}, 50);
			}
		}
	})
})
