import { apple, playStore, youtube, chrome, github, download, link } from '../Assets/Icons/Minimal'

interface Option {
    name: string,
    icon: string
}

const options: Option[] = [
    {
        name: "ReactJS",
        icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
    },
    {
        name: "NextJS",
        icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg"
    },
    {
        name: "Angular",
        icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
    },
    {
        name: "VueJS",
        icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg"
    },
    {
        name: "Svelte",
        icon: "https://cdn.worldvectorlogo.com/logos/svelte-1.svg"
    },
    {
        name: "Solid",
        icon: "https://www.solidjs.com/img/logo/without-wordmark/logo.svg"
    },
    {
        name: "NodeJS",
        icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    },
    {
        name: "TensorFlow",
        icon: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg"
    },
    {
        name: "PyTorch",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg"
    },
    {
        name: "ChatGPT",
        icon: "https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg"
    },
    {
        name: "Django",
        icon: "https://cdn.worldvectorlogo.com/logos/django.svg"
    },
    {
        name: "Firebase",
        icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
    },
    {
        name: "JavaScript",
        icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
    },
    {
        name: "TypeScript",
        icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg"
    },
    {
        name: "Rust",
        icon: "https://cdn.worldvectorlogo.com/logos/rust.svg"
    },
    {
        name: "Ruby",
        icon: "https://cdn.worldvectorlogo.com/logos/ruby.svg"
    },
    {
        name: "Java",
        icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg"
    },
    {
        name: "Python",
        icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg"
    },
    {
        name: "React Native",
        icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
    },
    {
        name: "Swift",
        icon: "https://cdn.worldvectorlogo.com/logos/swift-15.svg"
    },
    {
        name: "Kotlin",
        icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg"
    },
    {
        name: "C++",
        icon: "https://cdn.worldvectorlogo.com/logos/c.svg"
    },
    {
        name: "C#",
        icon: "https://cdn.worldvectorlogo.com/logos/c--4.svg"
    },
    {
        name: "C",
        icon: "https://cdn.worldvectorlogo.com/logos/c-1.svg"
    },
    {
        name: "Go",
        icon: "https://cdn.worldvectorlogo.com/logos/go-6.svg"
    },
    {
        name: "MongoDB",
        icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg"
    },
    {
        name: "PostgreSQL",
        icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg"
    },
    {
        name: "ScyllaDB",
        icon: "https://www.scylladb.com/wp-content/uploads/scylla-opensource-1.png"
    },
    {
        name: "Cassandra",
        icon: "https://cdn.worldvectorlogo.com/logos/cassandra.svg"
    },
    {
        name: "Arduino",
        icon: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
    },
    {
        name: "minimal:apple",
        icon: apple,
    },
    {
        name: "minimal:playstore",
        icon: playStore,
    },
    {
        name: "minimal:chrome",
        icon: chrome,
    },
    {
        name: "minimal:youtube",
        icon: youtube,
    },
    {
        name: "minimal:github",
        icon: github,
    },
    {
        name: "minimal:download",
        icon: download,
    },
    {
        name: "minimal:link",
        icon: link,
    }
]

const getIcon = (query: string): string | undefined => {
    if (!query) return undefined
    else return options.find(__ => __.name === query)?.icon
}

export default getIcon