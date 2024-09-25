import { useMemo } from 'react';

const useFormattedTitle = (title) => {
  const formattedTitle = useMemo(() => {
    return title.includes('\\n')
      ? title.split('\\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))
      : title;
  }, [title]);

  return formattedTitle;
};

export default useFormattedTitle;
