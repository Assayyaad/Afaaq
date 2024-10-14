import { FaClock } from "react-icons/fa";
const TableCard = () => {
  return (
    <div className="table-card shadow-md rounded-md p-6 max-w-[560px] flow-content--s relative group hover:bg-cyan-500 hover:text-white duration-300">
      <div className="wrapper flex items-center gap-4">
        <span className="font-bold text-lg">الاسم :</span>
        <span>محمد</span>
      </div>
      <div className="wrapper flex items-center gap-4">
        <span className="font-bold text-lg">عنوان المحاضرة :</span>
        <span>برمجه</span>
      </div>
      <div className="description max-w-[450px]">
        يتيح لك ايضا القدرة على إضافة علامات الترقيم، لهجات والحروف الخاصة لتكون
        أقرب إلى اللغات الفرنسية أو غيرها. أيضا إذا كنت تريد أن ترى النتائج في
        خطوط مختلفة، وسوف تجد العديد من الميزات لتحديد
      </div>
      <div className="badge flex items-center gap-4 justify-between rounded-md shadow-md bg-black text-white absolute left-5 top-5 px-4 py-1 duration-300 group-hover:bg-white group-hover:text-black">
        <FaClock />
        <span>6:10 PM</span>
      </div>
    </div>
  );
};

export default TableCard;
