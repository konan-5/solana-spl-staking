import React, { useState } from 'react';

const FlagSelector: React.FC = () => {
    const [selectedFlag, setSelectedFlag] = useState<string | null>(null);

    const togglePressed = (flag: string) => {
        setSelectedFlag(flag === selectedFlag ? null : flag);
    };

    return (
        <div className="flag-buttons">
            <button
                id="irishFlag"
                className={`flag-button ${selectedFlag === 'irishFlag' ? 'pressed' : ''}`}
                onClick={() => togglePressed('irishFlag')}
            ></button>
            <button
                id="ukFlag"
                className={`flag-button ${selectedFlag === 'ukFlag' ? 'pressed' : ''}`}
                onClick={() => togglePressed('ukFlag')}
            ></button>
        </div>
    );
};

export default FlagSelector;
