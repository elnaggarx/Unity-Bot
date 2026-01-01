import Image from "next/image"
import logo from "@/app/assets/unitylogo.png"

const Message = () => {
  return (
    <div className="message">
        <div className="message-sender-icon-container">
            <Image src={logo}></Image>
        </div>
        <div className="message-block"> 
            <h1>
                Lorem ipsum dolor sit amet.
            </h1>
            <br />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tortor id elit pellentesque convallis. Curabitur ut aliquet libero. Vestibulum congue dictum risus vel congue. Praesent a erat ac nibh efficitur viverra id vel arcu. Nam ullamcorper lectus et arcu vehicula facilisis. Vivamus laoreet vestibulum neque in tempor. Quisque placerat dapibus dui sit amet varius. Maecenas elementum tortor ipsum
            </p>
            <br />
            <p>
                Ut ut odio condimentum, bibendum velit vitae, pulvinar dolor. Sed placerat ante vitae diam consectetur malesuada. Mauris sed eros vehicula, rhoncus elit fermentum, efficitur massa. Nulla pharetra placerat erat, id semper ante molestie eu. Aliquam varius felis purus, rutrum pharetra arcu consequat ac. Vestibulum tristique enim a lacus tincidunt placerat. Nam tristique metus vel nunc aliquet mollis. Praesent enim tortor, venenatis eu suscipit nec, mollis fringilla nisl. Etiam eleifend eros ut sem accumsan, id consectetur dolor bibendum. Praesent facilisis suscipit massa, nec porttitor dui rhoncus condimentum.
            </p>
        </div>

    </div>
  )
}

export default Message