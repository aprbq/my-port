import { useEffect, useState } from 'react';
import './App.css'
import LeftSection from './sections/LeftSection';
import RightSection from './sections/RightSection';

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navBarItems, setnavBarItems] = useState([]);
  const [currentSection, setcurrentSection] = useState("");

  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id
    setSectionIds((prev)=>[...new Set([...prev, elementId])]);

    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent
    const obj = { title: elementTitle, sectionId: elementId}
    setnavBarItems((prev)=>{
        if(prev.findIndex(e=>e.title === obj.title) < 0) {
          return [...prev, obj];
        }
        return prev;
    });
  }
  
  const handleScroll = () => {
    for (let i = 0; i < sectionIds.length; i++) {
      const el = sectionIds[i];
      const elOffsetTop = document.getElementById(el).getClientRects()[0].y;
      const height = document.getElementById(el).getClientRects()[0].height * 0.5;
      const viewHeight = window.innerHeight * 0.3;

      if(elOffsetTop <= 0) {
        if((elOffsetTop + height) > viewHeight) {
          setcurrentSection(el)
        }
      } else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setcurrentSection(el)
      }
    }
  }

  useEffect(() => {
    if(sectionIds.length > 0) {
      setcurrentSection(sectionIds[0])
    }
  }, [sectionIds])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds])

  return (
    <div className='mt-12 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]'>
      <LeftSection navBarItems={navBarItems} currentSection={currentSection}/>
      <RightSection onInitial={addSectionIds}/>
    </div>
  )
}

export default App;
