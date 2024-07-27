import React from "react";
import Design from "./Design";
import s1 from "../Images/s1.jpg";
import s5 from "../Images/s5.jpg";

export default function DesignSection() {
  return (
    <div>
      <Design
        image={s1}
        title="The Sad Boy and the Gentle River"
        para1=" Once upon a time, a little boy named Tommy felt sad despite the sunny
          day. He wandered to his favorite spot by the gentle river, where he
          often went to think and find peace. As he sat on a smooth rock,
          watching a small paper boat he had made float by, the river seemed to
          come alive, whispering to him through the rustling leaves and flowing
          water. The boat danced gracefully across the river, and Tommy realized
          that even on sad days, there is always something beautiful to
          discover."
        para2=" Feeling comforted, Tommy understood that sadness, like a rainy day,
          would pass, and happiness could be found in simple things like a
          floating boat or a warm breeze. With a heart lighter and more hopeful,
          he walked home, knowing that whenever he felt sad again, the river
          would be there to remind him of the beauty and joy in the world. And
          so, Tommy learned to cherish the little moments that made him smile,
          living happily ever after with the river as his faithful companion."
      />
      <br />
      <br />
      <Design
        image={s5}
        title="Sam and Lily's Jungle Picnic Adventure"
        para1="Once upon a time, two best friends, Sam and Lily, decided to go on a picnic in the magical jungle near their village. The sun was shining brightly as they packed a basket full of delicious treats and set off on their adventure. The jungle was alive with colorful birds singing cheerful songs and playful monkeys swinging from the trees. Sam and Lily spread out their picnic blanket under a large, shady tree and enjoyed their snacks while surrounded by the jungle’s wonders."
        para2="As they explored, they discovered a sparkling stream where they played and splashed happily. Lily found a shiny pebble, and Sam spotted a butterfly with rainbow-colored wings. They laughed and shared stories, feeling as if they were in a magical world where every corner held a new surprise. As the sun began to set, they packed up their things, promising to return to their enchanting jungle playground. With hearts full of joy and memories, Sam and Lily headed home, dreaming of their next adventure together."
      />
    </div>
  );
}
