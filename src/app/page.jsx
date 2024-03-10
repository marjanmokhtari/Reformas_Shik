
import Firstrow from "./firstRow/firstrow";
import Secendrow from "./secendrow/Secendrow";
import Thirdrow from "./thirdrow/Thirdrow";
import Fiverow from "./fiverow/Fiverow";
import Sixrow from "./sixrow/Sixrow";
export default function Home() {

    return (
      <section className=" w-full">
        <Firstrow></Firstrow>
        <Secendrow></Secendrow>
        <Thirdrow></Thirdrow>
        <Fiverow></Fiverow>
        <Sixrow></Sixrow>
      </section>
    )

  }
