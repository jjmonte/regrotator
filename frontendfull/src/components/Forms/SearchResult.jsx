import React from 'react';

import { ResultListItem } from '../../pages/AddReleaseElements';

function SearchResult({ resultName, resultId, loadId, setIsLoadedFromSearch }) {
  return (
    <ResultListItem>
      <button onClick={() => loadId(resultId)} className="form-button">
        Use
      </button>
      {resultName}
    </ResultListItem>
  );
}
export default SearchResult;
