// JavaScript for Certificate Courses 

const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
        technology: ["Python"],
        completed: true,
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
        technology: ["HTML", "CSS"],
        completed: true,
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
        technology: ["Python"],
        completed: true,
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
        technology: ["C#"],
        completed: true,
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true,
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
        technology: ["HTML", "CSS", "JavaScript", "APIs", "UX/UI"],
        completed: false,
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const certCardsContainer = document.querySelector('.certificate-cards');
    const allCoursesButton = document.getElementById('all-courses');
    const wddCoursesButton = document.getElementById('wdd-courses');
    const cseCoursesButton = document.getElementById('cse-courses');
    const totalCreditsDisplay = document.querySelector('.credit-total');
    const courseDetailsModal = document.getElementById('courseDetails');

    // Function to render courses
    function renderCourses(filteredCourses) {
        certCardsContainer.innerHTML = ''; // Clear existing courses
        const totalCredits = filteredCourses.reduce((sum, course) => sum + (course.completed ? course.credits : 0), 0);
        
        filteredCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course-item');
            
            // Set the inner HTML for the course card
            courseDiv.innerHTML = `${course.subject} ${course.number}`;
            
            // Style for completed courses
            if (course.completed) {
                courseDiv.classList.add('completed');
            } else {
                courseDiv.classList.add("uncompleted");
            }
            
            // Add click event to show course details
            courseDiv.addEventListener('click', () => showCourseDetails(course));
            
            certCardsContainer.appendChild(courseDiv);
        });
        
        // Display total credits
        totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}`;
    }

    // Function to show course details in modal
    function showCourseDetails(course) {
        const status = course.completed ? "Completed" : "Not Completed";
        const statusClass = course.completed ? "completed-badge" : "uncompleted-badge";
        
        // Create technology tags
        const techTags = course.technology.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        courseDetailsModal.innerHTML = `
            <button id="closeModal" aria-label="Close dialog">✖</button>
            <h2>${course.subject} ${course.number}: ${course.title}</h2>
            <p><strong>Status:</strong> <span class="status-badge ${statusClass}">${status}</span></p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <div><strong>Technologies:</strong></div>
            <div class="tech-tags">${techTags}</div>
        `;
        
        courseDetailsModal.showModal();
        
        // Close modal when X is clicked
        document.getElementById('closeModal').addEventListener('click', () => {
            courseDetailsModal.close();
        });

        // Close modal when clicking outside
        courseDetailsModal.addEventListener('click', (e) => {
            if (e.target === courseDetailsModal) {
                courseDetailsModal.close();
            }
        });
    }

    // Function to filter courses
    function filterCourses(category) {
        const filteredCourses = category === 'All' ? 
            courses 
            : 
            courses.filter(course => course.subject === category);
        
        renderCourses(filteredCourses);
    }
    
    // Event listeners for buttons
    allCoursesButton.addEventListener('click', () => filterCourses('All'));
    wddCoursesButton.addEventListener('click', () => filterCourses('WDD'));
    cseCoursesButton.addEventListener('click', () => filterCourses('CSE'));

    // Initially display all courses
    filterCourses('All');
});
