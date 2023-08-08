import follow_img1 from "../../assets/follow/follow_1.png"
import follow_img2 from "../../assets/follow/follow_2.png"
import follow_img3 from "../../assets/follow/follow_3.png"
import follow_img4 from "../../assets/follow/follow_4.png"
import follow_img5 from "../../assets/follow/follow_5.png"
import follow_img6 from "../../assets/follow/follow_6.png"
import './Follow.css'
import instagram from '../../assets/follow/instagram.svg'

const Follow = () => {

  const follow_Img = [
    follow_img1,
    follow_img2,
    follow_img3,
    follow_img4,
    follow_img5,
    follow_img6
  ]

  return (
    <div>
      <h1 className="text-4xl text-center mb-16 font-extrabold text-black ">Follow On Instragram</h1>
      <div className="grid grid-cols-6 mx-2 gap-4">
      {
        follow_Img.map((img,i) => {
          return <div key={i} className="relative overflow-hidden">
          <div className="parent-container " 
          onMouseLeave={(e) => {
            const blendModeElement = e.currentTarget.querySelector("#blend_mode");
            const instra_img = e.currentTarget.querySelector("#ins_img")

            blendModeElement.classList.add("activeF");
            instra_img.classList.add("rev_ins")
          
            setTimeout(() => {
              blendModeElement.classList.remove("activeF");
            instra_img.classList.remove("rev_ins")
            }, 700); 
          }}
          onMouseEnter={(e) =>
            e.currentTarget.querySelector("#blend_mode").classList.remove("activeF")
          }
          >
            <img
              className=" w-[200px] h-[244px] transition-all"
              src={img}
              alt=""
            />
            
            
            <div
              id="blend_mode"
              className=" absolute inset-0 bg-black opacity-0 transition top-[35%]  "
            ></div>
            <a href="https://instragram.com">
            <img id="ins_img" className="text-center instra opacity-5 h-[15%] w-[15%] absolute top-[100px] left-[70px]" src={instagram} alt="" />
            </a>
          </div>
        </div>
        } )
      }
      </div>
    </div>
  );
};

export default Follow;