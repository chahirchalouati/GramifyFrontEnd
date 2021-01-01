import React from "react";
import { useSelector } from "react-redux";
import AddStory from "./AddStory";
import Story from "./Story";

export default function StoryList() {
  const { RX_STORY } = useSelector((state) => state);
  if (RX_STORY.get_story_start) {
    return (
      <div className="story_list">
        <AddStory />

      </div>
    );
  }
  if (RX_STORY.get_story_success) {
    return (
      <div className="story_list">
        <AddStory />
        {RX_STORY.stories.content.map((s) => (
          <Story key={s.id} story={s} />
        ))}
      </div>
    );
  }

  return <></>;
}
