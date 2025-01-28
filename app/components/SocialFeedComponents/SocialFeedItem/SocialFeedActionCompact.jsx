import { cn } from "@/lib/utils";
import { FaRegHeart } from "react-icons/fa";

export const SocialFeedActionCompact = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "mt-3 flex items-center justify-between border-b border-t px-4 py-4 text-Font_SubColor_1 app-text-category",
        className,
      )}
      {...props}
    >
      <button>
        <svg
          width="10"
          height="10"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-0.5 inline-block align-middle"
        >
          <path
            d="M10.5 0.0996094H6.9C3.1 0.0996094 0.0999985 3.09961 0.0999985 6.89961C0.0999985 10.4996 2.9 13.1996 6.6 13.2996V16.5996C6.6 16.6996 6.6 16.7996 6.7 16.9996C6.8 17.1996 7 17.2996 7.3 17.2996C7.4 17.2996 7.5 17.2996 7.7 17.1996C7.9 17.0996 13.3 13.5996 14.8 12.3996C16.5 10.9996 17.4 8.89961 17.5 6.89961C17.3 3.09961 14.4 0.0996094 10.5 0.0996094ZM13.8 11.3996C12.8 12.1996 9.6 14.3996 7.9 15.3996V12.5996C7.9 12.1996 7.6 11.8996 7.2 11.8996C7.1 11.8996 6.9 11.8996 6.9 11.8996C3.7 11.8996 1.4 9.69961 1.4 6.79961C1.4 3.69961 3.8 1.29961 6.9 1.29961H10.5C13.6 1.29961 16 3.69961 16 6.79961C16 8.59961 15.2 10.2996 13.8 11.3996Z"
            fill="#AAB6BF"
            stroke="#AAB6BF"
            strokeWidth="0.25"
            strokeMiterlimit="10"
          />
        </svg>
        <span className="align-middle">156</span>
      </button>

      <button>
        <svg
          width="15"
          height="11"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-0.5 inline-block"
        >
          <path
            d="M14.3071 7.33733C14.1277 7.15797 13.8886 7.15797 13.769 7.33733L12.4537 8.65263V2.97294C12.4537 1.89679 11.5569 1 10.4808 1H7.01317C6.77402 1 6.59467 1.17936 6.59467 1.4185C6.59467 1.65765 6.77402 1.83701 7.01317 1.83701H10.4808C11.1384 1.83701 11.6765 2.37508 11.6765 3.03273V8.71241L10.3612 7.39712C10.1818 7.21776 9.94269 7.21776 9.82311 7.39712C9.64376 7.57648 9.64376 7.81562 9.82311 7.93519L11.7961 9.90814C11.8558 9.96792 11.9754 10.0277 12.095 10.0277C12.2146 10.0277 12.2743 9.96792 12.3939 9.90814L14.3669 7.93519C14.4267 7.75584 14.4266 7.51669 14.3071 7.33733Z"
            fill="#AAB6BF"
            stroke="#AAB6BF"
            strokeWidth="0.25"
            strokeMiterlimit="10"
          />
          <path
            d="M8.26867 9.3109H4.80107C4.14342 9.3109 3.60535 8.77283 3.60535 8.11518V2.49528L4.92064 3.81058C4.98043 3.87036 5.1 3.93015 5.21957 3.93015C5.33915 3.93015 5.39893 3.87036 5.5185 3.81058C5.69786 3.63122 5.69786 3.39207 5.5185 3.2725L3.54556 1.29956C3.3662 1.1202 3.12706 1.1202 3.00749 1.29956L1.03454 3.2725C0.855185 3.45186 0.855185 3.691 1.03454 3.81058C1.2139 3.98993 1.45305 3.98993 1.57262 3.81058L2.88792 2.49528V8.17497C2.88792 9.25112 3.78471 10.1479 4.86086 10.1479H8.32845C8.5676 10.1479 8.74696 9.96855 8.74696 9.72941C8.68718 9.49026 8.50782 9.3109 8.26867 9.3109Z"
            fill="#AAB6BF"
            stroke="#AAB6BF"
            strokeWidth="0.25"
            strokeMiterlimit="10"
          />
        </svg>

        <span className="align-middle">156</span>
      </button>

      <button>
        <FaRegHeart
          className="mr-0.5 inline-block align-middle"
          size={10}
        ></FaRegHeart>
        <span className="align-middle">156</span>
      </button>

      <button>
        <svg
          width="19"
          height="4"
          viewBox="0 0 19 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.69055 2C7.69055 0.89543 8.58598 0 9.69055 0C10.7951 0 11.6906 0.89543 11.6906 2C11.6906 3.10457 10.7951 4 9.69055 4C8.58598 4 7.69055 3.10457 7.69055 2Z"
            fill="#AAB6BF"
          />
          <path
            d="M14.6906 2C14.6906 0.89543 15.586 0 16.6906 0C17.7951 0 18.6906 0.89543 18.6906 2C18.6906 3.10457 17.7951 4 16.6906 4C15.586 4 14.6906 3.10457 14.6906 2Z"
            fill="#AAB6BF"
          />
          <path
            d="M0.690552 2C0.690552 0.89543 1.58598 0 2.69055 0C3.79512 0 4.69055 0.89543 4.69055 2C4.69055 3.10457 3.79512 4 2.69055 4C1.58598 4 0.690552 3.10457 0.690552 2Z"
            fill="#AAB6BF"
          />
        </svg>
      </button>
    </div>
  );
};
