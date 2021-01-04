import React from "react";
import MessaggingBody from "./MessagingComponents/MessaggingBody";
import MessaggingFooter from "./MessagingComponents/MessaggingFooter";
import MessaggingHeader from "./MessagingComponents/MessaggingHeader";

export default function MessageContainer() {
    return (
        <div className="messaging_container">
            <MessaggingHeader />
            <MessaggingBody />
            <MessaggingFooter />
        </div>
    );
}
