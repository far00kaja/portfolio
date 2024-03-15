import { useEffect } from "react"

export default function Works() {
    useEffect(() => {
        document.title = "Dicky Darmawan Portfolio | Works"
    },)
    return (
        <>
            <section id="works" className="h-fit flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-8">
                <h1 className="text-semibold text-6xl mb-10">Work Experiences</h1>
                <ol className="relative border-s-2 border-gray-400 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-4 h-4 bg-gray-600 rounded-full mt-2 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">Full Stack Developer</h3>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">PT. AKSES CIPTA SOLUSI</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug 2021 - Present</time>
                        <ul className="ml-5 list-disc list-item text-gray-800 dark:text-gray-400">
                            <li>
                                Built REST API service on project in the health sector using Java Spring boot </li>
                            <li>
                                Fixed some bugs on service </li>
                            <li>
                                Made user authentication where session stored into redis </li>
                            <li>
                                Consumed data from Apache Kafka for integrating data between databases </li>
                            <li>
                                Made service and web application for internal to maintain update file from XML (Go and React) </li>
                            <li>
                                Made service and web application for internal to monitoring data activities (Express and Vue 3) </li>
                        </ul>
                        <div className="my-4 text-sm font-semibold leading-none text-gray-800 dark:text-gray-500  flex flex-wrap gap-2 w-4/4 sm:w-3/4">

                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Java</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Spring Boot</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Apache Kafka</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">NodeJS</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">ExpressJS</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">PostgreSQL</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Golang</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Vue</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">ReactJS</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">TailwindCSS</span>
                        </div>

                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-4 h-4 bg-gray-600 rounded-full mt-2 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">Front End Developer</h3>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">PT. AKSES CIPTA SOLUSI</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec 2019 - Present</time>
                        <ul className="ml-5 list-disc list-item text-gray-800 dark:text-gray-400">
                            <li>
                                Built library for video call using VueJS </li>
                            <li>
                                Fixed some bugs on web applications in the health sector using CodeIgniter </li>
                            <li>
                                Built Web app for messaging, voice call & video call base on websocket using VueJS </li>
                            <li>
                                Build Web app for messaging, voice call & video call base on websocket using Laravel 6 </li>
                        </ul>
                        <div className="my-4 text-sm font-semibold leading-none text-gray-800 dark:text-gray-500  flex flex-wrap gap-2 w-4/4 sm:w-3/4">

                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">PHP</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Laravel</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">PostgreSQL</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">CodeIgniter</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Vue</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">TailwindCSS</span>
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-4 h-4 bg-gray-600 rounded-full mt-2 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">Back End Developer Freelance</h3>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Waizly</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec 2019 - Present</time>
                        <ul className="ml-5 list-disc list-item text-gray-800 dark:text-gray-400">
                            <li>
                                Bug and Fixed feature
                            </li>
                            <li>
                                Optimized queries
                            </li>
                            <li>
                                Added some adjustment on response API
                            </li>
                            <li>
                                Do Pairing Programming and made template on pull request
                            </li>
                        </ul>
                        <div className="my-4 text-sm font-semibold leading-none text-gray-800 dark:text-gray-500  flex flex-wrap gap-2 w-4/4 sm:w-3/4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">PHP</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">CodeIgniter</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Yii</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Git</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Jira</span>
                        </div>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-4 h-4 bg-gray-600 rounded-full mt-2 -start-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 className="text-2xl mb-2 font-semibold text-gray-900 dark:text-white">Back End Developer Freelance</h3>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">PT. Digdaya Olah Teknologi Indonesia (Remote, Indonesia)</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2022 - Jan 2023</time>
                        <ul className="ml-5 list-disc list-item text-gray-800 dark:text-gray-400">
                            <li>
                                Created API Gateway using Node.JS </li>
                            <li>
                                Created API authentication </li>
                            <li>
                                Made connection authentication to Redis </li>
                            <li>
                                Worked on agile methodology
                                Used git for versioning and merging feature or task </li>
                            <li>
                                Used Slack for communication between team </li>
                            <li>
                                Used Kubernetes and Google Cloud Platform for access application </li>
                            <li>
                                Created docker for containering application
                            </li>
                        </ul>

                        <div className="my-4 text-sm font-semibold leading-none text-gray-800 dark:text-gray-500  flex flex-wrap gap-2 w-4/4 sm:w-3/4">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">ExpressJS</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">NodeJS</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Laravel</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Redis</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Golang</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Kubernetes</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Google Cloud Platform</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Docker</span>
                        </div>
                    </li>
                </ol>
            </section></>
    )
}