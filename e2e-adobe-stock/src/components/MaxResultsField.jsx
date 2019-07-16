const React = require('react');

const MAX_RESULTS = ['20', '50', '75', '100'];

const MaxResultsField = ({ label, onChange, value, options = MAX_RESULTS } = {}) => (
    <label className="row">
        { label && <span>{label}</span> }
        <select uxp-quiet="true" onChange={onChange} value={value}>
            {options.map(n => (
                <option key={n} value={`${n}`}>{`${n}`}</option>
            ))}
        </select>
    </label>
);

module.exports = MaxResultsField;
