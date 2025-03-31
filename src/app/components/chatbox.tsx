'use client';
import React from 'react';
import { Message, useAssistant } from '@ai-sdk/react';


export default function ChatComponent() {
  const { status, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: '/api/assistant' });

  return (
    <div
      style={
        {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'stretch',
          height: '100%',
          backgroundColor: 'white', 
          padding: '1rem',
          boxSizing: 'border-box',
        }
      }
    >
      <div
      style={{
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: "lightgray",
        height: "3rem",

      }}
      >
      Bot Status: {status}
      </div>
      <div
        style={
          {
            backgroundColor: 'white',
            color: 'black',
            height: 'auto',
            minHeight: '77vh',
            overflowY: 'auto',
            overflowX: 'hidden',
            border: '1px solid #ccc',
          }
        }
        >
      {messages.map((message: Message) => (
        <div key={message.id}>
          <div
            style={
              {
                color: 'black',
                fontSize: '1.5rem',
              }
            }
          >
            {`${message.role}: ${message.content}`}
          </div>
        </div>
      ))}
      </div>
      <form onSubmit={submitMessage} style={{ flexShrink: 0 }}>
        <textarea
          disabled={status !== 'awaiting_message'}
          value={input}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              submitMessage();
            }
          }}
          onChange={handleInputChange}
          style={{
            width: '100%',
            height: '7rem',
            fontSize: '1rem',
            padding: '1rem',
            resize: 'none',
            overflowY: 'auto',
            boxSizing: 'border-box',
            lineHeight: '1.5',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        />
        <button 
          style=
          {
            { 
              width: "100%", 
              height: "3rem", 
              color: 'black', 
              fontWeight: 'bold', 
              fontSize: "2rem"
              }
          }>
            Submit
          </button>
      </form>
    </div>
  );
}
