import { useEffect } from "react";

export default function Works() {
  useEffect(() => {
    document.title = "Dicky Darmawan Portfolio | Works";
  });
  return (
    <>
      <section
        id="works"
        className="h-fit flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-8"
      >
        <h1 className="text-semibold text-6xl mb-10">Work Experience</h1>
        <ol className="relative border-s-2 border-gray-400 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-4 h-4 bg-gray-600 rounded-full mt-2 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
              Full Stack Developer
            </h3>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              PT. AKSES CIPTA SOLUSI
            </h3>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white">
              Bandung, Indonesia (On Site)
            </h4>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Aug 2021 - Present
            </time>
            <ul className="ml-5 list-disc list-item text-gray-800 dark:text-gray-400">
              <li>
                Developed application backend (Scheduler and REST API) for
                collecting system application from derived data processing from T24 to
                database using Java dan PostgreSQL{" "}
              </li>
              <li>
                Developed call center applications by creating REST APIs and
                Schedulers using Java, PostgreSQL and Redis
              </li>
              <li>
                Built a Microservice to monitor agent activities in the call
                center using Java, Kafka and PostgreSQL
              </li>
              <li>
                Built a call center log monitoring application using NodeJS,
                Docker, Grafana, Loki, Promptail
              </li>
              <li>
                Built an internal application to test SMS by processing XML data
                using Go Gin for API, React for Web, Tailwindcss and Docker
              </li>
              <li>
                Made service and web application for internal to monitoring data
                activities (Express and Vue 3){" "}
              </li>
              <li>
                Built REST API for inventory applications using Java and
                PostgreSQL
              </li>
              <li>Developed applications for medical records using Java</li>
              <li>
                Built an application to manage Google reviews using Java and the
                Google Review API
              </li>
              <li>Refactor the application</li>
              <li>
                Optimized the frontend when loading, which previously took 25
                seconds when first loading data, becomes 7 seconds with the
                frontend case using Vue 3
              </li>
              <li>
                Became a mentor for students who do intern by providing
                provisions for the backend team using Laravel and the frontend
                team using Vue 3 and managing project using Git
              </li>
              <li>Built library for video call using Vue</li>
              <li>
                Fixed some bugs on medical record web applications using
                CodeIgniter
              </li>
              <li>
                Developed feature report to monitor outpatient activities using
                Java and CodeIgniter
              </li>
              <li>
                Developed feature for reporting transaction using Java and
                CodeIgniter
              </li>
            </ul>
            <div className="my-4 text-sm font-semibold leading-none text-gray-800 dark:text-gray-500  flex flex-wrap gap-2 w-4/4 sm:w-3/4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Java
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Spring Boot
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Apache Kafka
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                NodeJS
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                ExpressJS
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                PostgreSQL
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Golang
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Vue
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                ReactJS
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                TailwindCSS
              </span>
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-4 h-4 bg-gray-600 rounded-full mt-2 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
              Front End Developer
            </h3>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              PT. AKSES CIPTA SOLUSI
            </h3>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white">
              Bandung, Indonesia (On Site)
            </h4>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Dec 2019 - Aug 2021
            </time>
            <ul className="ml-5 list-disc list-item text-gray-800 dark:text-gray-400">
              <li>Built library for video call using VueJS </li>
              <li>
                Fixed some bugs on web applications in the health sector using
                CodeIgniter{" "}
              </li>
              <li>
                Built Web app for messaging, voice call & video call base on
                websocket using VueJS{" "}
              </li>
              <li>
                Build Web app for messaging, voice call & video call base on
                websocket using Laravel 6{" "}
              </li>
            </ul>
            <div className="my-4 text-sm font-semibold leading-none text-gray-800 dark:text-gray-500  flex flex-wrap gap-2 w-4/4 sm:w-3/4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                PHP
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Laravel
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                PostgreSQL
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                CodeIgniter
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Vue
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                TailwindCSS
              </span>
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-4 h-4 bg-gray-600 rounded-full mt-2 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
              Back End Engineer Freelance
            </h3>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              PT Aksara Integrasi Sejahtera (Arvis)
            </h3>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white">
              Indonesia (Remote)
            </h4>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2024 - Mei 2024
            </time>
            <ul className="ml-5 list-disc list-item text-gray-800 dark:text-gray-400">
              <li>Migrate application from PHP to Typescript</li>
              <li>Migrate database from MySQL to MongoDB</li>
              <li>Created Documentation API using Swagger</li>
            </ul>
            <div className="my-4 text-sm font-semibold leading-none text-gray-800 dark:text-gray-500  flex flex-wrap gap-2 w-4/4 sm:w-3/4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                TypeScript
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                MongoDB
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Express.js
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Redis
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Domain-Driven Design (DDD)
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Git
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Swagger API
              </span>
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-4 h-4 bg-gray-600 rounded-full mt-2 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
              Back End Developer Freelance
            </h3>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Waizly
            </h3>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white">
              Indonesia (Remote)
            </h4>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Nov 2023 - Des 2024
            </time>
            <ul className="ml-5 list-disc list-item text-gray-800 dark:text-gray-400">
              <li>Fixed bugs using in PHP</li>
              <li>Optimized queries in MySQL</li>
              <li>Added some adjustment on response API in PHP</li>
              <li>Did Pairing Programming and made template on pull request</li>
              <li>Used git for versioning and merging tickets</li>
              <li>Used Discord for communication between team</li>
              <li>
                Added some adjustment on web view and file report in pdf and
                excel using PHP
              </li>
              <li>
                Developed API and Cron Job in warehouse management system
                applications using NodeJS, MySQL and Redis
              </li>
            </ul>
            <div className="my-4 text-sm font-semibold leading-none text-gray-800 dark:text-gray-500  flex flex-wrap gap-2 w-4/4 sm:w-3/4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                PHP
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                ExpressJS
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Redis
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                CodeIgniter
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Yii
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Git
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Jira
              </span>
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-4 h-4 bg-gray-600 rounded-full mt-2 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">
              Back End Developer Freelance
            </h3>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              PT. Digdaya Olah Teknologi Indonesia (DOT)
            </h3>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-white">
              Indonesia (Remote)
            </h4>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jun 2022 - Jan 2023
            </time>
            <ul className="ml-5 list-disc list-item text-gray-800 dark:text-gray-400">
              <li>Created API Gateway using Node.JS </li>
              <li>Created API authentication </li>
              <li>Made connection authentication to Redis </li>
              <li>
                Worked on agile methodology Used git for versioning and merging
                feature or task{" "}
              </li>
              <li>Used Slack for communication between team </li>
              <li>
                Used Kubernetes and Google Cloud Platform for access application{" "}
              </li>
              <li>Created docker for containering application</li>
            </ul>

            <div className="my-4 text-sm font-semibold leading-none text-gray-800 dark:text-gray-500  flex flex-wrap gap-2 w-4/4 sm:w-3/4">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                ExpressJS
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                NodeJS
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Laravel
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Redis
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Golang
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Kubernetes
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Google Cloud Platform
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Docker
              </span>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}
