import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goalInputRef = useRef<HTMLInputElement>(null);
  const summaryInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalInputRef.current!.value;
    const enteredSummary = summaryInputRef.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goalInputRef} />
      </div>
      <div>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summaryInputRef} />
      </div>
      <div>
        <button>Add Goal</button>
      </div>
    </form>
  );
}
