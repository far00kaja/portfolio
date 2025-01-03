import { useEffect } from "react"

export default function Introduction() {
    useEffect(() => {
        document.title = "Dicky Darmawan Portfolio | Introduction"
    },)
    return (
        <>
            <section id="introduction" className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-8">
                <h1 className="text-bold text-6xl py-10 text-justify break-words">👋 Hello,</h1>
                <ul className="flex gap-4  flex-col font-semibold text-2xl text-gray-800 dark:text-gray-50 ">
                    <li>
                        I’m <a href="https://www.linkedin.com/in/dicky-darmawan-cv/" className="underline" target="_blank">Dicky Darmawan</a>
                    </li><li>
                        - 👀 I’m interested and on exploration phase in depth about backend  </li>
                    <li>
                        - 🌱 I’m currently learning Go, Java, NodeJS, Vuejs and ReactJS
                    </li>
                    <li>
                        - 📫 How to reach me, you can send to my email <a href="mailto:dckydrm1@gmail.com" target="_blank" className="underline">dckydrm1@gmail.com</a> or check my <a href="https://www.linkedin.com/in/dicky-darmawan-cv/" target="_blank" className="underline"> LinkedIn</a> Profile
                    </li>
                </ul>
            </section>
        </>
    )
}