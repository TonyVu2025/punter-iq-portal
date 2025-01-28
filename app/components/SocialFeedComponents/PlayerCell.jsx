import Image from "next/image";

export const PlayerCell = (props) => {
  return (
    <td width={250} {...props}>
      <div className="flex space-x-4 py-3 pl-3 lg:pl-7">
        <Image
          src="/img/icons/t-shirt-orange.svg"
          alt="Shirt Icon"
          width={32}
          height={32}
        />

        <div>
          <div className="app-text-body-paragraph">4. Lucas the Younger</div>
          <div className="text-xs text-Font_SubColor_1">
            T: Wendy Kelly <br />
            J: Joe Bowditch (58kg)
          </div>
        </div>
      </div>
    </td>
  );
};
