document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineImage = document.getElementById('timeline-image');
    const timelineTitle = document.getElementById('timeline-title');
    const timelineDescription = document.getElementById('timeline-description');
    const uploadPhotoInput = document.getElementById('upload-photo');
    const timelineContent = document.getElementById('timeline-content');

    // Object to store images for each timeline entry
    const timelineImages = {};

    // Handle timeline item click with 3D animation
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            timelineItems.forEach(el => el.classList.remove('active'));

            // Add active class to the clicked item
            item.classList.add('active');

            // Update content
            const year = item.getAttribute('data-year');
            const description = item.getAttribute('data-description');
            const image = item.getAttribute('data-image');

            timelineTitle.textContent = year;
            timelineDescription.textContent = description;

            // Check if there's a custom uploaded image for this timeline item
            if (timelineImages[year]) {
                timelineImage.src = timelineImages[year]; // Use uploaded image
            } else {
                timelineImage.src = image; // Use default image
            }

            // Apply 3D animation
            timelineContent.style.animation = 'flipIn 0.6s ease-out';
            setTimeout(() => {
                timelineContent.style.animation = '';
            }, 600);
        });
    });

    // Handle profile picture upload
    uploadPhotoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // Find the currently active timeline item
                const activeItem = document.querySelector('.timeline-item.active');
                if (activeItem) {
                    const year = activeItem.getAttribute('data-year');
                    timelineImages[year] = e.target.result; // Store uploaded image for this timeline year

                    // Set the uploaded image as the current profile picture
                    timelineImage.src = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
    });
});



$(".timeline-item").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".item01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".item02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".item03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".item04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".item05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});

