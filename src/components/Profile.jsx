import React from 'react'
import ProfileSection from './ProfileSection'
import Gallary from './Gallary'
import Accordian from './Accordian'
import ImageGallary from './ImageGallary'

const Profile = () => {
    
  return (
   <>
   <div className='mt-[76px] max-w-[1140px] m-auto px-[15px] pt-[15px]' >
    {/* Top Navigation */}
   <nav>
    <ul className='flex items-center flex-wrap ' >
        <li><a className='text-[#00000084] text-sm font-semibold  pr-[21px] ' href="">Home</a> </li>
        <li><a className='text-[#00000084] text-sm font-semibold  pr-[21px] ' href="">CELEBRITY APPEARANCE</a> </li>
        <li className='text-[#00000084] text-sm font-semibold pl-[10px] '>Ranbir Kapoor</li>
    </ul>
   </nav>
   {/* Profile Section */}
   <ProfileSection photo="rabirPP.jpg" />
   <Gallary  />
   {/* Biography */}
   <Accordian image="https://stcdn.starclinch.in/mobile/images/profile/biography_icon.svg" Title="Biography" desc="Ranbir Kapoor is a Bollywood Superstar. A recipient of several accolades including five FILMFARE AWARDS, he is one of the most popular and highest paid celebrities in India. He is the grandson of well acclaimed Actor-Director Raj Kapoor and the son of actors Neetu Kapoor & Rishi Kapoor. At the LEE STRASBERG and THEATER AND FILM INSTITUTE & SCHOOL OF VISUAL ARTS, Ranbir pursued film-making and method acting respectively, following which he assisted SANJAY LEELA BHANSALI on the film BLACK (2005).   Ranbir Kapoor kick-started his acting debut with Bhansali's Tragic-Romance SAAWARIYA (2007), a performance so ecstatic that he bagged a Filmfare Award for THE BEST MALE DEBUT   3 hit flicks, namely Ajab Prem Ki Ghazab Kahani, Rocket Singh-Salesman Of The Year & Wake Up Sid earned him 3 Filmfare Critics Awards for Best Actor Ranbir Kapoor’s award winning spree was extended with 2 BEST ACTOR awards at FILMFARE with stellar performances in ROCKSTAR (Drama, 2011) and BARFI (Drama-Comedy, 2012), where he played a troubled musician and a deaf-mute man respectively   He further proved his versatile acting skills by engaging the audiences in films like BOMBAY TALKIES (Appearance), YEH JAWAANI HAI DIWANI (RomanticComedy,2013) & RAJNEETI (Drama, 2010)   Films aside, Kapoor is a stern supporter of charitable causes and initiatives. He happens to be the Co-Owner of the INDIAN SUPER LEAGUE football team, MUMBAI CITY FC and the Co-Founder of  Picture Shuru Productions"/>

   {/* Performance Details */}
   <Accordian image="https://stcdn.starclinch.in/mobile/images/profile/Performance_Details.svg" Title="Performance Details" PerformanceDetails />
   {/* Performance Language */}
   <Accordian image="https://stcdn.starclinch.in/mobile/images/profile/performance_language_v2.svg" Title="Performance Language" PerformanceLanguage />
   {/* Review */}
   <Accordian image="https://starclinch.com/static/mobile/images/profile/review_icon.svg" Title="Review" Review />



   </div>
   </>
  )
}

export default Profile
