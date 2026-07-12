"use client";

const PRESETS = ["10", "25", "50", "100", "250"];

export default function DonationAmountPicker({
  value,
  onChange,
  name,
  currency = "£",
}: {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  currency?: string;
}) {
  const isPreset = PRESETS.includes(value);

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {PRESETS.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => onChange(amount)}
            className={`rounded-full border px-3 py-3 text-sm font-bold transition-all duration-300 ${
              value === amount
                ? "border-[var(--brand-orange)] bg-[var(--brand-orange)] text-white"
                : "border-gray-300 bg-white text-[var(--brand-dark)] hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white"
            }`}
          >
            {currency}
            {amount}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onChange("")}
          className={`rounded-full border px-3 py-3 text-sm font-bold transition-all duration-300 ${
            !isPreset
              ? "border-[var(--brand-orange)] bg-[var(--brand-orange)] text-white"
              : "border-gray-300 bg-white text-[var(--brand-dark)] hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white"
          }`}
        >
          Other
        </button>
      </div>

      <div className="mt-4 flex overflow-hidden rounded-full border border-gray-300 bg-white focus-within:border-[var(--brand-orange)]">
        <div className="flex flex-shrink-0 items-center justify-center bg-[var(--brand-orange)] px-5 text-lg font-bold text-white">
          {currency}
        </div>
        <input
          type="number"
          min="1"
          step="1"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter amount"
          required
          className="w-full min-w-0 bg-transparent px-4 py-3 text-base font-semibold text-[var(--brand-dark)] outline-none"
        />
      </div>
    </div>
  );
}
