import DialogueBox from "/src/components/DialogueBox/DialogueBox.jsx";
import ChoiceBtn from "/src/components/ChoiseBtn";

export default function Scene({ scene, nextScene }) {
  return (
    <div
      className="h-screen flex flex-col justify-end bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${scene.bg})` }}
    >
      <DialogueBox text={scene.text} />

      <div className="p-4">
        {scene.choices?.map((choice, i) => (
          <ChoiceBtn key={i} text={choice.text} onClick={() => nextScene(choice.next)} />
        ))}
      </div>
    </div>
  );
}
