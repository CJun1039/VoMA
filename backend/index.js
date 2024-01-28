import express from "express";
import { connect } from "./src/database.js";
import * as instrument from "./src/instrument.js";
import * as fund from "./src/fund.js";
import * as fund_anal from "./src/analysis/fund.js";
import * as instrument_anal from "./src/analysis/instrument.js";
import cors from 'cors';

const listen_port = 3001;

connect();

const app = express();
app.use(express.json());
app.use(cors());

// instruments API
app.get("/instruments/:id/name", instrument.get_name);
app.get("/instruments", instrument.list);
app.get("/instruments/:id", instrument.get_by_ID);
app.put("/instruments/:id", instrument.put_by_ID);
app.get("/price-values/:id", instrument.price_value);
app.get("/instruments/:id/funds", instrument.funds);

// fund API
app.get("/funds/:id/name", fund.get_name);
app.get("/funds", fund.list);
app.get("/funds/:id/instruments/:instrument_id", fund.get_one_instrument_pos);
app.get("/funds/:id/instruments", fund.get_all_instrument_pos);
app.get("/funds/:id/total-market-value", fund.get_total_market_value);
app.get("/funds/:id/total-pnl", fund.get_total_pnl);

// instrument analysis API
app.get("/analysis/instrument/:id/monthly-marketvalue-list", instrument_anal.list_monthly_market_value);
app.get("/analysis/instrument/:id/monthly-pnl-list", instrument_anal.list_monthly_pnl);
app.get("/analysis/instrument/:id/monthly-pnl-list/:start-date/:end-date", instrument_anal.list_monthly_pnl_range);
app.get("/analysis/instrument/:id/twelve-month-returns",instrument_anal.get_twelve_month_returns);

// fund analysis API
app.get("/analysis/fund/:id/topten-instruments", fund_anal.get_topten_instruments);
app.get("/analysis/fund/:fundId/monthly-PNL-list", fund_anal.list_monthly_pnl);
app.get("/analysis/fund/:fundId/instrument/:instrumentId/monthly-PNL-list", fund_anal.list_instrument_monthly_pnl);
app.get("/analysis/fund/:id/monthly-marketvalue-list", fund_anal.list_monthly_market_value);
app.get("/analysis/fund/topten", fund_anal.get_topten);
app.get("/analysis/fund/:id/topten-countries", fund_anal.get_topten_countries);

app.listen(listen_port, () => {
    console.log(`Express server listening at http://ec2-13-211-167-50.ap-southeast-2.compute.amazonaws.com:${listen_port}`);
});
