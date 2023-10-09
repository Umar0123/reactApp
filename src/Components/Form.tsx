import * as React from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import { Stack, IStackProps, IStackStyles } from "@fluentui/react/lib/Stack";

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

export const Form: React.FunctionComponent = () => {
  return (
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
        <TextField label="Standard" />
        <TextField label="Read-only" readOnly defaultValue="I am read-only" />
        <TextField label="Required " required />
      </Stack>
      <Stack {...columnProps}>
        <TextField
          label="With placeholder"
          placeholder="Please enter text here"
        />
        <TextField
          label="Disabled with placeholder"
          disabled
          placeholder="I am disabled"
        />
        <TextField
          label="Password with reveal button"
          type="password"
          canRevealPassword
          revealPasswordAriaLabel="Show password"
        />
      </Stack>
    </Stack>
  );
};
