import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stories } from "../../Services/RequestServices";
import AddStory from "./AddStory";
import Story from "./Story";

function StoryList() {


  const { RX_STORY } = useSelector((state) => state);

  const dispatch = useDispatch();


  useEffect(() => {
    const storie = () => {
      dispatch(stories.getAll())
    }
    storie()

  }, [dispatch])


  if (RX_STORY.get_story_start) {
    return (
      <div className="story_list">

      </div>
    );
  }
  if (RX_STORY.get_story_success) {
    return (
      <div className="story_list">
        <AddStory />{RX_STORY.stories.content.map((s) => (<Story key={s.id} story={s} />))}
      </div>
    );
  }

  return <></>;
}

export default StoryList
