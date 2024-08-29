import Card from "../../main shop/Card";

export default function Description() {
  return (
    <section className="flex gap-6 items-start justify-start ">
      <Card className={""}>
        <h6 className="border-b-2 border-b-gray-600 mb-5 font-semibold">
          Description{" "}
        </h6>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni qui
          non quis ad dicta nemo cumque, maiores atque porro iure corporis
          quibusdam itaque delectus vel autem assumenda odio nisi ipsam
          repellendus provident dolor maxime! suscipit aut a aliquam reiciendis
          impedit totam hic veritatis in cum quam eum eaque iure. Impedit, eos
          aliquam! Recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus non, nemo ipsa corporis adipisci
          aliquid iusto expedita alias velit suscipit aut a aliquam reiciendis
          impedit totam hic veritatis in cum quam eum eaque iure. Impedit, eos
          aliquam! Recusandae.
        </p>
        <p className="pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          non, nemo ipsa corporis adipisci aliquid iusto expedita alias velit
          suscipit aut a aliquam reiciendis impedit totam hic veritatis in cum
          quam eum eaque iure. Impedit, eos aliquam! Recusandae. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatibus non, nemo
          ipsa corporis adipisci aliquid iusto expedita alias velit suscipit aut
          a aliquam reiciendis impedit totam hic veritatis in cum quam eum eaque
          iure. Impedit, eos aliquam! Recusandae. quam eum eaque iure. Impedit,
          eos aliquam! Recusandae. quam eum eaque eos aliquam!
        </p>
      </Card>
      <div className="flex flex-col gap-4 items-start">
        <Card className={"px-8"}>
          <h6 className="border-b-2 border-b-gray-600 mb-5  font-semibold">
            Key Features
          </h6>
          <ul className="text-nowrap list-disc">
            <li> iure. Impedit, eos aliquam! Recusandae</li>
            <li> iure. Impedit, eos aliquam! Recusandae</li>
            <li> iure. Impedit, eos aliquam! Recusandae</li>
            <li> iure. Impedit, eos aliquam! Recusandae</li>
            <li> iure. Impedit, eos aliquam! Recusandae</li>
          </ul>
        </Card>
        <Card className={"px-8"}>
          <h6 className="border-b-2 border-b-gray-600 mb-5 font-semibold">
            Specifications
          </h6>
          <ul className="text-nowrap list-disc">
            <li> iure. Impedit, eos aliquam! Recusandae</li>
            <li> iure. Impedit, eos aliquam! Recusandae</li>
            <li> iure. Impedit, eos aliquam! Recusandae</li>
            <li> iure. Impedit, eos aliquam! Recusandae</li>
            <li> iure. Impedit, eos aliquam! Recusandae</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
