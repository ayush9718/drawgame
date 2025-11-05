import React from "react";
import { useNavigate } from "react-router-dom";

const WinnerPage = ({ WinnerName, results }) => {
  const navigate = useNavigate();

  const handleLeave = () => {
    navigate("/room");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      {/* Winner Name */}
      <h1 className="text-4xl font-extrabold text-green-700 mb-6 animate-bounce">
         Winner: {WinnerName}
      </h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Round Results
      </h2>

      {/* Results Display */}
      <div className="w-full flex justify-between max-w-3xl space-y-6">
        {results && results.length > 0 ? (
          results.map((player, index) => (
            <div
              key={player.playerId || index}
              className="bg-white w-[40%] shadow-lg rounded-2xl p-5 border border-gray-200"
            >
              {/* Player Header */}
              <div className="flex  justify-between items-center border-b pb-2 mb-2">
                <h3 className="text-xl font-bold text-blue-700">
                  {player.playerName}
                </h3>
                <p className="text-sm text-gray-600">
                   Top Prediction:{" "}
                  <span className="font-semibold text-green-600">
                    {player.topPrediction}
                  </span>
                </p>
              </div>

              {/* Top 10 Predictions */}
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-1">#</th>
                    <th className="py-1">Label</th>
                    <th className="py-1">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {player.top10.map((item, i) => (
                    <tr key={i} className="border-b last:border-none">
                      <td className="py-1">{i + 1}</td>
                      <td className="py-1">{item.label}</td>
                      <td className="py-1">{(item.confidence * 100).toFixed(2)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No results available yet.</p>
        )}
      </div>

      {/* Leave Room Button */}
      <button
        onClick={handleLeave}
        className="mt-8 px-6 py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition-all duration-200"
      >
        Leave Room
      </button>
    </div>
  );
};

export default WinnerPage;
