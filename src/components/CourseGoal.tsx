import { type PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode; // import from react
// }

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  );
}

//writing it with an arrow function, // import FC from react
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
