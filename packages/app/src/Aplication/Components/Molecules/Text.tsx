import React from 'react';

/* type TVariant =
  | 'text'
  | 'blockquote'
  | 'span'
  | 'code'
  | 'lead'
  | 'small'
  | 'muted'; */

interface TextProps {
  children: React.ReactNode;
}

/* const headingClasses = {
  'text': "leading-7 [&:not(:first-child)]:mt-6",
  'blockquote': "mt-6 border-l-2 pl-6 italic",
  'span': 
  'code': 
  'lead': 
  'small': 
  'muted';: 
}; */

export const Text = ({ children }: TextProps) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
);

const TextBlockquote = ({ children }: TextProps) => (
  <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
);

const TextCode = ({ children }: TextProps) => (
  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
    {children}
  </code>
);

const TextLead = ({ children }: TextProps) => (
  <p className="text-xl text-muted-foreground">{children}</p>
);

const TextSmall = ({ children }: TextProps) => (
  <small className="text-sm font-medium leading-6">{children}</small>
);

const TextMuted = ({ children }: TextProps) => (
  <p className="text-sm text-muted-foreground">{children}</p>
);

Text.Blockquote = TextBlockquote;
Text.Code = TextCode;
Text.Lead = TextLead;
Text.Small = TextSmall;
Text.Muted = TextMuted;
