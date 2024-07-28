import Card from "../../main shop/Card";

export default function Description() {
  return (
    <section className="flex gap-6 items-center px-16 justify-center">
      <Card className={"w-[100%]"}>
        <h6 className="border-b-2 border-b-gray-600 ">Description </h6>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni qui
          non quis ad dicta nemo cumque, maiores atque porro iure corporis
          quibusdam itaque delectus vel autem assumenda odio nisi ipsam
          repellendus provident dolor maxime!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          non, nemo ipsa corporis adipisci aliquid iusto expedita alias velit
          suscipit aut a aliquam reiciendis impedit totam hic veritatis in cum
          quam eum eaque iure. Impedit, eos aliquam! Recusandae.
        </p>
      </Card>
      <div className="mx-8">
        <Card className={"w-[60%] h-[60%] bg-white mt- "}>
          <h6 className="border-b-2 border-b-gray-600 ">Key Features</h6>
          <p className="text-wrap pr-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, a
            vitae sequi obcaecati odit placeat odio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam, a vitae sequi obcaecati odit
            placeat odio.
          </p>
        </Card>
        <Card className={"w-[60%] h-[60%] mt-6   bg-white"}>
          <h6 className="border-b-2 border-b-gray-600 ">Specifications</h6>
          <p className="text-wrap pr-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, a
            vitae sequi obcaecati odit placeat odio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam, a vitae sequi obcaecati odit
            placeat odio.
          </p>
        </Card>
      </div>
    </section>
  );
}
