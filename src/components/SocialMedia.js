import React from 'react'

const SocialMedia = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <img className=' shadow-md shadow-white duration-300 rounded-xl p-1 hover:scale-125'  width="40" height="40" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                </>
            ),
            href: "https://www.linkedin.com/in/manoranjan-d-salunke-683180173/",
        },
        {
            id: 2,
            child: (
                <>
                    <img className=' shadow-md shadow-white duration-300 rounded-xl p-1 hover:scale-125'  width="40" height="40" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
                </>
            ),
            href: "https://github.com/Manoranjan710",
        },
        {
            id: 3,
            child: (
                <>
                    <img className=' shadow-md shadow-white duration-300 rounded-xl p-1 hover:scale-125'  width="40" height="40" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/>
                </>
            ),
            href: "mailto:manoranjan710@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    <img className=' shadow-md shadow-white duration-300 rounded-xl p-1 hover:scale-125'  width="40" height="40" src="https://img.icons8.com/fluency/48/resume.png" alt="resume"/>
                </>
            ),
            href: "/resume.pdf",
            download: true,
        }
    ]

  return (
    <div className='mt-10'>
        <ul className='flex flex-row mx-auto space-x-7' >
            {links.map(({id, child, href, download}) => (
            <li key={id}>
                <a  href={href} download={download} target='_blank' rel='noreferrer' >
                    {child}
                </a>
            </li>
            ))}    
        </ul>

    </div>
  )
}

export default SocialMedia