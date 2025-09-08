export default function ProductCart(props) {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl flex flex-col gap-3">
        <img
          src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-16.png"
          alt="Iphone"
          width={250}
          height={200}
          className="bg-black p-2 rounded-lg"
        />
        <div className="flex justify-between px-0.5">
            <span className="text-black text-[16px] font-[600]">{props.name}</span>
            <span className="text-black text-[16px] font-[600]">{props.price}</span>
        </div>
        <button className="w-full bg-black text-[14px] py-2.5 rounded-lg cursor-pointer hover:font-semibold">ADD TO CARD</button>
      </div>
    </>
  );
}
