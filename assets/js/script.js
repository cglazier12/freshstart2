// this funciton immediately below is actually jQuery, jQuery makes working with the DOM a little bit easier than plain jane js but you are not bringing it in to your html page so javascript doesnt know how to read it
// google jQuery cdn if you wanted to use it in this project.

function() {
	('.toggler').on('click', function() {
		('nav').slideToggle(500);
  });
};

function submitFirstName(event)
{
    console.log(event)
	event.preventDefault();
	// on submit, test the name field//
	 let firstName = document.getElementById ('name');
	 
	 if (firstName.value) {
		 alert('Success! Your info was submitted.');
	 } else {
		 alert('invalud first name. Please try again')
	 }
}


class Navbar {
    constructor(target, menu) {
        // 1. Check parameters type and throw error if not an HTML element
        if (target instanceof HTMLElement && menu instanceof HTMLElement) {
            // 2. If parameters are HTML elements set the attributes
            this.btn = target;
            this.menu = menu;
        } else {
            throw new TypeError("The Target and Menu arguments must be a DOM element."); 
        }
        this.isOpen = false;
    }
}

class Navbar {
    constructor(target, menu) {
        if (target instanceof HTMLElement && menu instanceof HTMLElement) {
            this.btn = target;
            this.menu = menu;

            this.btn.addEventListener('click', () => {
                this.open();
            });
        } else {
            throw new TypeError("The Target and Menu arguments must be a DOM element."); 
        }
        ...
    }

    open() {
        if (this.isopen) {
            this.menu.classList.add('nav-hidden');
        } else {
            this.menu.classList.remove('nav-hidden');
        }

        this.isopen = !this.isopen;
    }
}

const navbar = new Navbar(
    document.querySelector(".menu-btn"),
    document.querySelector(".menu-list")
);