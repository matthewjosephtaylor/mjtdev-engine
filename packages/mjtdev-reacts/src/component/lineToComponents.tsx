import { isDefined } from "@mjtdev/object";


export const lineToComponents = ({
  line, key, actions,
}: {
  actions: Record<string, () => void>;
  line: string;
  key: string | number;
}) => {
  {
    const anchorMatches = Array.from(
      line.matchAll(/^(.*)(https:[a-z0-9\.\\\/\-]*)(.*)$/gi)
    );
    if (anchorMatches.length > 0) {
      return (
        <div key={key}>
          {anchorMatches
            .map((m, i) => {
              return m.map((part, j) => {
                const childKey = `${key}-${i}-${j}`;
                if (j === 0) {
                  return undefined;
                }
                if (/^http/i.test(part)) {
                  return (
                    <a key={childKey} href={part}>
                      {part}
                    </a>
                  );
                }
                return <span key={childKey}>{part}</span>;
              });
            })
            .filter(isDefined)}
        </div>
      );
    }
  }
  {
    const linkMatches = Array.from(
      line.matchAll(/^(.*)(link:[a-z0-9\.\\\/\-]*)(.*)$/gi)
    );
    if (linkMatches.length > 0) {
      return (
        <div key={key}>
          {linkMatches
            .map((m, i) => {
              return m.map((part, j) => {
                const childKey = `${key}-${i}-${j}`;
                if (j === 0) {
                  return undefined;
                }
                if (/^link/i.test(part)) {
                  const name = part.replace("link:", "").trim();
                  return (
                    <button
                      key={childKey}
                      onClick={() => {
                        const action = actions[name];
                        if (isDefined(action)) {
                          return action();
                        }
                        console.log(`No action named ${name} found`);
                        console.log({ actions, action, name });
                      }}
                    >
                      {name}
                    </button>
                  );
                }
                return <span key={childKey}>{part}</span>;
              });
            })
            .filter(isDefined)}
        </div>
      );
    }
  }
  return <div key={key}>{line}</div>;
};
