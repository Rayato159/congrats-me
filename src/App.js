// Components
import { ParagraphTitle } from "./components/ParagraphTitle"
import { CodeBlocks } from "./components/CodeBlocks"

// Code
import {
  isEngineer,
  Onet,
} from "./utils/CodeBlocks"

// Icons
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

export const App = () => {
  return (
    <div className="App">
      <div className="mx-auto max-w-5xl">

        <div className="flex flex-col space-y-4 px-6 py-4 md:px-6 md:py-8">
          {/* Title Group */}
          <div className="flex flex-col space-y-4 text-center">
            <div>
              <div className="text-3xl font-semibold italic">🛩️ Congrats Me! 🛩️</div>
            </div>
            <div>
              <div className="text-md md:text-xl font-semibold italic">Bachelor of Engineering Program in Aeronautical Engineering</div>
            </div>
          </div>

          {/* Image Cover */}
          <div className="flex w-full justify-center py-8">
            <img src="./assets/images/CH_L3379.png" className="w-64 h-64 object-cover rounded-full shadow-md" />
          </div>

          {/* Quute */}
          <div className="flex flex-col text-center">
            <div className="flex flex-col space-y-1">
              <div className="text-md md:text-xl font-light italic text-gray-600">
                "Airplanes are beautiful dreams, cursed dreams. Waiting for the sky to swallow them up."
              </div>
              <div className="text-md md:text-xl font-light italic text-gray-600">
                "เครื่องบินคือความฝันอันงดงามที่ต้องคำสาป รอคอยให้ท้องฟ้ากลืนกินมัน"
              </div>
            </div>
          </div>

          {/* Line */}
          <div className="pt-4">
            <div className="flex justify-end font-semibold py-2">
              Date: 2022-04-05
            </div>
            <div className="w-full h-1 rounded-full bg-gray-300"></div>
          </div>

          {/* Story */}
          <div className="flex flex-col space-y-10">
            {/* Paragraph-1 */}
            <div className="flex flex-col space-y-6">
              <div>
                <ParagraphTitle props={'"ขออนุญาตแนะนำตัวสักเล็กน้อยนะครับ"'}/>
              </div>
              <div>
                <CodeBlocks props={isEngineer}/>
              </div>
              <div className="text-md md:text-xl">
                สวัสดีครับ ผมชื่อ ลูกหิน เรียนวิศวกรรมอากาศยาน ตอนนี้ก็จบแล้ว ทำงานเป็น <span className="font-bold"> Back-End Software Developer</span> มีความใฝ่ฝันที่อยากจะเป็น
                <span className="font-bold"> Full-Stack</span> ครับ ไม่ต้องตกใจนะครับ ว่าแบบ เฮ้ยๆ เดี๋ยวๆ วิศวกรรมอากาศยานทำไมมาเป็น Dev
              </div>
              <div className="text-md md:text-xl">
                แต่ต้องบอกไว้ก่อนเลยนะครับ ว่าผมชอบเขียน Code เป็นพิเศษมาตั้งแต่สมัย ปวช. ตอนนั้นเริ่มจาก ภาษา C ครับ เพราะเห็นว่าถ้าเริ่มต้นที่ C พื้นเราจะแน่นมากๆ
                ตอนนั้นก็ศึกษาด้วยตัวเอง <span className="font-bold">เริ่มตั้งแต่พื้นฐานของภาษา C ยัน Data Structure & Algorithm</span>
              </div>
              <div className="flex w-full justify-center items-center pt-4">
                <div className="px-4">
                  <img src="./assets/images/CH_L5166.png" className="w-56 rounded-lg" />
                </div>
                <div className="flex flex-col space-y-1">
                  <img src="./assets/images/CH_L5159.png" className="w-96 rounded-lg" />
                </div>
              </div>
              <div className="text-center">
                รูปสมัยเรียน ปวช. ฐานวิทย์
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <ParagraphTitle props={'"ความเป็นมาและประสบการณ์การเรียน"'}/>
              </div>
              <div className="text-md md:text-xl">
                จุดเริ่มต้นของผม ที่ผมมาเรียนวิศวกรรมอากาศยานได้เนี่ย มันเริ่มจากการที่ผมเรียนจบ ปวช. มา 
                แล้วทีนี้สำหรับหลักสูตร ปวช. เราจะต้องสมัครสอบ O-net เองครับ ซึ่งวันนั้นผมก็ไม่รู้อะ อยู่ในช่วงเบลอๆของชีวิต แล้วก็เดินไปถามเพื่อนว่า
              </div>
              <div>
                <CodeBlocks props={Onet}/>
              </div>
              <div className="text-md md:text-xl">
                นั่นแหละครับ เรื่องมันก็เป็นมาแบบนี้แหละ แต่บังเอิญว่าผมโชคดี ที่เรียนโครงการฐานวิทยาศาสตร์ ซึ่งมันสามารถยื่นรอบ Portfolio กับบางมหาลัยได้
                แล้วที่ที่ผมยื่นก็คือ วิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีสุรนารี ชื่อเล่นคือ มทส. นั่นแหละ ที่แรก และที่สุดท้าย
              </div>
              <div className="text-md md:text-xl pt-3">
                ตอนเข้าไปเรียนปี 1 ใหม่ๆก็รู้สึกไม่ค่อยมีความสุขเท่าไหร่ครับ ผมรู้สึกว่าการเรียนวิศวะมันไม่ใช่กับคนอย่างผมเท่าไหร่นัก แต่ก็ช่วยไม่ได้ เพราะเราตัดสินใจมาแล้ว
                จะซิ่วก็เสียทั้งเงิน และเวลา เลยตัดสินใจว่า เรียนๆไป เดี๋ยวก็จบเองแหละ(มั้ง) แต่ในความเป็นจริง เราไม่สามารถทำใจได้ง่ายๆ เหมือนที่เราคาดหวังยังไงล่ะ
                คือชีวิตช่วงปี 1 ของผมค่อนข้างที่จะน่าเบื่อสุดๆเลยครับ วิชาไหนที่ไม่มีเช็คชื่อ
                ผมไม่เข้าเรียนอย่างแน่นอน ก็อาจจะมีไปบ้างถ้าเหงาอยากไปเจอเพื่อนอะไรประมาณนี้ แต่หลักๆคือ แทบจะไม่ไปเลยครับ รู้สึกเซงกับชีวิตโคตรๆไปเลยช่วงนั้น
                คิดเอา นั่งเล่น Minecraft จนเช้าทุกวัน เวลานอนพังเละเทะ พอใกล้จะสอบก็ค่อยมาอ่านหนังสือ
              </div>
              <div className="text-md md:text-xl pt-3">
                เวลาผ่านไป จนเกือบจะขึ้นปี 2 ผมก็ยังไม่รู้ตัวเองว่าจะเรียนสาขาอะไรดี ด้วยความที่ว่าก่อนหน้านี้ ผมเบียวเกม 
                <span className="font-bold hover:text-blue-500"> <a href="https://store.steampowered.com/app/220200/Kerbal_Space_Program/">Kerbal Space Program</a></span> มากๆ (มันคือเกมจำลองการสร้างจรวจและอากาศยานที่สมจริงมาก 
                ไปหาลองเล่นกันได้นะครับ) เราก็ชอบพวกอวกาศนี่หว่า ก็เรียนอากาศยานไปดิวะ
                เผื่อถ้าอยากไปไกลกว่านี้ก็สามารถ สอบชิงทุนไปเรียนต่อต่างประเทศด้าน Aerospace Engineer
                <div className="font-bold text-md md:text-xl pt-3">
                  ผลสรุปก็คือ ได้เรียนสาขานี้สมใจอยาก!!!
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <ParagraphTitle props={'"ช่วงชีวิตระหว่างการเรียนวิชาสาขา"'}/>
              </div>
              <div className="text-md md:text-xl">
                ช่วงชีวิตระหว่างการเรียนวิชาสาขาเป็นอะไรที่ผมต้องปรับตัวหนักมากครับ จากที่ไม่เคยมาเข้าเรียนก็ต้องตื่นไปเรียนทุกวันแล้วทีนี้
                แล้วปกติวิชาสาขาจะสอนเช้าด้วยครับ บางเทอมนี่ 8 โมงเช้าทุกวันก็มี แล้วยิ่งพวกวิชาแลปนี่คือ เขียน Report หามรุ่งหามค่ำ
                ข้อสอบก็อย่างโหด หลายวิชาตัดตามเกณฑ์ ถ้าสอบได้ไม่ถึง 50% ก็คือ F บอกตรงๆว่าทุลักทุเลพอสมควร
              </div>
              <div className="text-md md:text-xl">
                แล้วมันมีอยู่วิชานึงชื่อวิชาว่า Engineering Statics คือมันเรียน 8 โมงเช้า ผมก็ชอบไปหลับในห้องบ่อยๆเวลาเรียน อาจารย์ก็จะคอยว่าผมตลอดครับ
                ว่าแบบ "เนี่ย เดี๋ยวก็ได้มาเรียนซ้ำอีกรอบแน่" แล้วแน่นอนครับ ผมไม่ยอมให้มันเป็นแบบนั้นแน่ๆ ผมผ่านวิชานี้ในไม้เดียว แถมได้ B มาด้วย
              </div>
              <div className="text-md md:text-xl">
                เอาจริงๆการเรียนวิศวกรรมอากาศยาน มันก็สนุกของมันนะ วิชาที่ผมโปรดปรานและมีความสุขมากที่สุดในการเรียนก็คือ <span className="font-bold">Engineering Dynamics,</span>
                <span className="font-bold"> Thermodynamics</span> และ <span className="font-bold">Aerodynamics</span> ครับ ผมรู้สึกว่าศาสตร์พวกนี้มันมหัศจรรย์และมีเสน่ห์ และน่าค้นหาเอามากๆ
              </div>
              <div className="flex flex-col space-y-2">
                <img src="./assets/images/MyBook.jpg" className="w-96 object-cover rounded-lg"/>
                <div className="text-md">
                  Textbook สมัยเรียน (สนใจติดต่อได้นะ Facebook อยู่ด้านล่าง ยังขายอยู่ครับ 555)
                </div>
              </div>
              <div className="text-md md:text-xl">
                ผมพยายามปรับตัวให้ดีขึ้นๆทุกวันครับ พยายามมองโลกในแง่ดี หาพลังบวกให้ตัวเองบ่อยๆ แล้วจุดที่เปลี่ยนหนักๆที่สุดของผมก็คือ มีอยู่วันนึง
                ผมรู้สึกจริงๆว่า Engineer มันไม่ใช่ทางของเราแล้วแหละ แม้มันจะเรียนสนุกก็ตาม แต่ลึกๆแล้วผมก็ยังชอบเขียน Code ชอบสร้างอะไรจากความว่างเปล่า
                มากกว่าอยู่ดี ช่วงประมาณ ปี 2 ปลายๆ ได้โอกาสช่วง COVID เรียน Online พอดี ผมเลยดึงตัวเองกลับมาฝึกเขียน Code ทุกครั้งที่มีเวลาว่าง แล้วก็ยาวไปเรื่อย
                จาก AI ไป Optimization จาก Optimization ไป Web-Application จนถึงปัจจุบัน (ยังมีไปแอบฝึก Pentesting ด้วยนะ)
              </div>
              <div className="flex flex-col space-y-2">
                <img src="./assets/images/YongEngineer.jpg" className="w-96 object-cover rounded-lg"/>
                <div className="text-md">
                  รูปสมัยยังหนุ่มๆ 555
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <ParagraphTitle props={'แล้วมาทำงาน Dev ได้ยังไง ?'}/>
              </div>
              <div className="text-md md:text-xl">
                อย่างที่บอกไปช่วงแรกๆว่าผมชอบเขียน Code เป็นการส่วนตัวอยู่แล้วครับ ผมก็มักจะทำ Project เล็กๆไว้ใน Github เรื่อยๆถ้ามีเวลาว่าง
                บางครั้งก็มีโอกาสได้รับงานนอก หาเงินกับฝึกประสบการณ์ไปด้วยพร้อมๆกัน
              </div>
              <div className="text-md md:text-xl">
                แล้วทีนี้ช่วงที่ออกสหกิจ (ฝึกงานที่มีโปรเจค) ผมได้โอกาสไปทำงานกับบริษัทนึง มันคงเป็นโชคของผมด้วยแหละส่วนนึง เขาส่งผมไปอยู่กับ Partner ไปทำ R&D (Research & Development)
                แล้วมันมี Project นึงที่บริษัทอยากจะทำ เลยลองให้เด็กฝึกงานแบบผมลองทำดู ซึ่งมันเป็น Website ครับ ผมได้แบกคนเดียวเลย ทำ Full-Stack Node.js
                แล้วผลงานก็เป็นที่น่าพอใจ เขาเลยชวนทำงานต่อ ผมก็เลยบอกว่า อยากเป็น Back-End Dev เขาก็ Okay ให้ทำข้อสอบเสร็จ แล้วถ้าเขาประเมิณว่ารับได้ ก็เรียกไปสัมภาษณ์
                ต่อ ก็เลยได้มาเป็น Dev ในปัจจุบัน
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <ParagraphTitle props={'"บทส่งท้าย"'}/>
              </div>
              <div className="text-md md:text-xl">
                ผมมองว่า เราอยากทำอะไรเป็นอะไร มันได้หมด ไม่จำเป็นว่าเราจะต้องเรียนวิศวะ
                แล้วต้องไปทำงานด้านวิศวะ ขอแค่เราเชื่อว่าเราทำได้ แล้วก็หมั่นฝึกฝนไปตามความเชื่อของเรามันเป็นก็เป็นไปได้
              </div>
              <div className="text-md md:text-xl">
                <span className="font-bold">แล้วสุดท้ายผมขอขอบคุณทุกกำลังใจจากคนรอบข้าง ที่ทำให้ผมเติบโตมาถึงทุกวันนี้ครับ</span>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <ParagraphTitle props={'"ของฝากชาวทวิตภพ"'}/>
              </div>
              <div className="text-md md:text-xl">
                ที่ผ่านมา 4 ปี ผมไม่เคย F ครับ เลยอยากจะอวด นี่ย์ เป็นไงล่ะ แล้วก็อีกอย่าง ผมไม่ใช่พี่ปีสูงเหมือนที่ใน Twitter เคยเอาผมไปแขวนนะครับ
                แล้วก็อย่าได้หาเอาคนอื่นไปแขวน แล้วก็ใส่ข้อความที่ไม่เป็นความจริงออกไปอีกล่ะครับ
              </div>
              <div className="flex w-full">
                <img src="./assets/images/ForTwitter.png" className="rounded-lg"/>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center space-y-2">
            <div className="font-bold text-2xl italic pt-6">
              © 2022 Ruangyot Nanchiang
            </div>
            <div className="flex space-x-3 py-4">
              <button>
              <a href="https://github.com/Rayato159" target="_blank"><AiFillGithub className="h-10 w-10 hover:text-gray-400"/></a>
              </button>
              <button>
                <a href="https://www.facebook.com/Rayato160" target="_blank"><BsFacebook className="h-9 w-9 hover:text-gray-600"/></a>
              </button>
              <button>
                <a href="https://www.youtube.com/channel/UCZxY4ZhT7TwrwHqEwYJ-sZg" target="_blank"><AiFillYoutube className="h-10 w-10 hover:text-gray-600"/></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
