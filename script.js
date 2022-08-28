const dropdown = document.querySelector('.dropdown');
const features = document.querySelector('.feature-list');

dropdown.addEventListener('click', () => {
	features.style.visibility = 'visible';
});
