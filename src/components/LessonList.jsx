
"use client";
import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";

const LessonList = ({videoTitle,onClick}) => {
    return (
        <div className="shadow p-5">
            <Accordion
                openIcon={<CaretUp />}
                closeIcon={<CaretDown />}
                iconPosition="right"
                flush={true}
            >
                <Accordion.Panel>
                    <Accordion.Title>
                        {videoTitle}
                    </Accordion.Title>
                    <Accordion.Content >
                        <button style={{ cursor: 'pointer'}} onClick={onClick}>
                            {videoTitle}
                        </button>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};
export default LessonList
