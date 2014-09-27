mathy-issues
============

Chrome Extension for rendering LaTeX within GitHub issues.

Use the following markup to render LaTeX:

    <p label="tex">[tex goes here]</p>
    
    // example
    <p label="tex">c = \sqrt(a^2 + b^2)</p>
    
[Whitelisted HTML elements and attributes](https://github.com/jch/html-pipeline/blob/863ebd255ba8947bcf3b015685c615546567200d/lib/html/pipeline/sanitization_filter.rb#L44-L72).