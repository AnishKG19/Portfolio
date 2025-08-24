// app/page.js
// This is a complete, self-contained Next.js page component for a resume.
// To use, ensure you have a Next.js project with Tailwind CSS setup.

import React from 'react';

// --- SVG Icon Components ---
// Using inline SVGs is a good practice to avoid external dependencies and improve performance.

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.287 7.422c.077.152.25.18.431.087l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
  </svg>
);

const GlobeIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.092c-.531.14-1.02.348-1.466.62a.75.75 0 0 0-.44 1.223 7.5 7.5 0 0 1 0 5.032.75.75 0 0 0 .44 1.223c.446.272.935.48 1.466.62v.092a.75.75 0 0 0 1.5 0v-.092c.531-.14 1.02-.348 1.466-.62a.75.75 0 0 0 .44-1.223 7.5 7.5 0 0 1 0-5.032.75.75 0 0 0-.44-1.223A9.06 9.06 0 0 0 12.75 6.092V6Zm-1.5 10.552v.092a.75.75 0 0 1-1.5 0v-.092c-.531-.14-1.02-.348-1.466-.62a.75.75 0 0 1-.44-1.223 7.5 7.5 0 0 0 0-5.032.75.75 0 0 1 .44-1.223c.446-.272.935-.48 1.466-.62v-.092a.75.75 0 0 1 1.5 0v.092c.531.14 1.02.348 1.466.62a.75.75 0 0 1 .44 1.223 7.5 7.5 0 0 0 0 5.032.75.75 0 0 1-.44 1.223c-.446.272-.935.48-1.466.62Z" clipRule="evenodd" />
    </svg>
);

const LinkedInIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}>
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 53.79-54.3c29.7 0 53.79 24.2 53.79 54.3a53.79 53.79 0 0 1-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
);

const GithubIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" className={className}>
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7.8 72.1 25.4 20.9-6.2 43.6-9.4 66.3-9.4 22.6 0 45.4 3.1 66.3 9.4 50.2-33.1 72.1-25.4 72.1-25.4 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-56.4 104.2-112.6 110.5 9.1 7.8 17.2 23.2 17.2 45.6 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
);


// --- Main Resume Page Component ---
export default function ResumePage() {
  
  // --- Sample Data ---
  // In a real application, you might fetch this data from a CMS or an API.
  const resumeData = {
    name: 'Anish Kumar Gupta',
    title: 'Software Developer',
    summary: 'Full-stack developer skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js) with proficiency in Java and Python. Experienced in building responsive web applications, designing efficient algorithms, and delivering scalable, user-friendly digital solutions.',
    contact: {
      email: 'anishguptagkp123@gmail.com',
      phone: '+91 8052710714',
      website: 'alexdoe.dev',
      linkedin: 'linkedin.com/in/anish-gupta-34a00022a/',
      github: 'github.com/AnishKG19',
    },
    experience: [
      {
        company: 'Deutsche Bank',
        location: 'Pune, India',
        title: 'TDI (Tech Data Innovation) Intern',
        period: 'May 2025 - July 2025',
        description: [
          'Developed an end-to-end responsive web application from scratch, beginning with UI/UX design in Figma and implementing it using React.js with React Redux for state management, React Router DOM for navigation, and RESTful APIs for backend integration.',
          'Utilized Material UI and Tailwind CSS frameworks to build modern, responsive, and consistent UI components.',
          ' Integrated backend services by making API calls via Swagger UI, dynamically fetching and displaying data.',
          ' Implemented features such as sorting (by date, name), pagination, and advanced filtering to enhance usability and data navigation.',
          '  Ensured cross-browser compatibility and optimized application performance for better user experience.',

        ],
      },
      // {
      //   company: 'Digital Creations LLC',
      //   location: 'Austin, TX',
      //   title: 'Frontend Developer',
      //   period: 'Jun 2017 - Dec 2019',
      //   description: [
      //     'Developed and maintained multiple client websites using React, Redux, and Styled Components.',
      //     'Worked in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives.',
      //     'Improved website accessibility (WCAG 2.1 AA compliance) and SEO performance across all projects.',
      //   ],
      // },
    ],
    education: [
      {   
        institution: 'Indian Institute of Technology (BHU)',
        degree: 'Mathematical Sciences',
        period: 'CGPA 7.84, Year:2021-2026 ',
        location: 'Varanasi, India',
      },
       {
        institution: ' Children Senior Secondary School ',
        degree: 'CBSE XII  ',
        period: 'Percentage-93.20%, Year: 2020',
        percentage : 93.20, 
        location: 'Kota, Rajasthan',
      },
      {
        institution: ' St. Judes School',
        degree: 'ICSE X',
        period: 'Percentage-94%, Year: 2018',
        percentage : '34', 
        location: ' Gorakhpur, Uttar Pradesh',
      },
    ],
    skills: {
      'Languages': ['JavaScript ', 'TypeScript', 'Go', 'Java' , 'C++' ],
      'Frameworks/Libraries': ['React', 'Next.js', 'Redux', 'Node.js',   'Express'],
      'Tools & Platforms': ['Git', 'Webpack', 'Babel', 'Docker', 'Vercel'],
      'Databases': ['PostgreSQL', 'MySQL' , 'MongoDB'],
    },
    projects: [
      {
            name: ' Go Commerce: A Scalable E-Commerce Platform in Golang',
            description: 'Developed a high-performance backend using Golang and the Gin framework, ensuring efficient request handling and scalability.  Implemented JWT authentication for secure user login and session management and integrated RESTful APIs for user management, product catalog, shopping cart, and order processing. Utilized MongoDB as a flexible NoSQL database for storing user, product, and order data.  ',
            link: 'https://github.com/AnishKG19/GoCommerce-A-Scalable-E-Commerce-Platform-in-Golang'
        },
        {
            name: 'Book Store Application',
            description: 'The Bookstore Application is a full-stack web project developed using the MERN stack, designed to deliver a seamless and dynamic online book shopping experience. It features a fully responsive interface built with React.js for a smooth, component-driven user experience, while Express.js and Node.js handle API routing, server-side logic, and high-performance operations. MongoDB efficiently manages user data and purchase details, ensuring scalability and reliability, making the application accessible and optimized across all devices.'  ,
            link: 'https://github.com/AnishKG19/Book_Store_Application'
        },
        {
            name: ' News App - Web Application designed to provide users with the latest news articles.',
            description: 'The News App is a dynamic web application that fetches real-time data from a reputable news API to provide users with the most current and relevant articles. The feed updates automatically to ensure fresh content with every access, while article cards offer concise overviews and direct links to full stories for detailed reading. Designed with a consistent and responsive layout, the app ensures an optimized browsing experience across all devices.',
            link: 'https://github.com/AnishKG19/NewsApp'
        }
    ]
  };

  // --- Reusable Section Component ---
  const Section = ({ title, children }) => (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );

  return (

    <>
    
      

    <div className="min-h-screen bg-slate-100 font-sans text-gray-700">



      <main className="container mx-auto max-w-4xl p-4 sm:p-8">
        <a href ="/" 
       className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-1  border-none rounded-md "
                 
      >
        Go To Home 
      </a>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* --- Header Section --- */}
          <header className="text-center mb-10 border-b pb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              {resumeData.name}
            </h1>
            <p className="text-xl md:text-2xl text-teal-600 font-medium mt-2">
              {resumeData.title}
            </p>
            {/* Contact Info */}
            <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 mt-6 text-sm">
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                    <MailIcon className="w-4 h-4" /> {resumeData.contact.email}
                </a>
                <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                    <PhoneIcon className="w-4 h-4" /> {resumeData.contact.phone}
                </a>
                 {/* <a href={`https://${resumeData.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                    <GlobeIcon className="w-4 h-4" /> {resumeData.contact.website}
                </a> */}
                <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                    <LinkedInIcon className="w-4 h-4" /> LinkedIn
                </a>
                <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                    <GithubIcon className="w-4 h-4" /> GitHub
                </a>
            </div>
          </header>

          {/* --- Summary Section --- */}
          <Section title="Professional Summary">
            <p className="leading-relaxed text-sm">
              {resumeData.summary}
            </p>
          </Section>

             <Section title="Education">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="flex justify-between text-sm items-baseline">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-md text-teal-700">{edu.institution} - {edu.location}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">{edu.period}</p>
              </div>
            ))}
          </Section>

            <Section title="Skills">
            <div className="space-y-4 text-sm">
                {Object.entries(resumeData.skills).map(([category, skillsList]) => (
                    <div key={category}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillsList.map((skill, i) => (
                                <span key={i} className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </Section>


          {/* --- Experience Section --- */}
          <Section title="Work Experience">
            <div className="space-y-8 text-sm ">
              {resumeData.experience.map((job, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-sm font-medium text-gray-500">{job.period}</p>
                  </div>
                  <p className="text-md text-teal-700 font-medium">{job.company} - {job.location}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* --- Skills Section --- */}
        

          {/* --- Projects Section --- */}
          <Section title="Projects">
            <div className="space-y-4 text-sm ">
                {resumeData.projects.map((project, index) => (
                    <div key={index}>
                        <h3 className="text-lg font-semibold text-gray-800">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 hover:underline">
                                {project.name}
                            </a>
                        </h3>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
          </Section>

          {/* --- Education Section --- */}
       
        </div>
      </main>
    </div>


        </>
  );
}
