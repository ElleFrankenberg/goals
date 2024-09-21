import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGole } from "../App.tsx";

type CourseGoalListProps = {
  goals: CGole[];
  onDeleteGole: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGole,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGole}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
