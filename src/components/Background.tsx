import "../../public/background.css"

export default function Background(){
  
  return (
    <div className="background">
      {Array.from({ length: 50}, (x, i) => <span key={i}></span>)}
    </div>
  )
};