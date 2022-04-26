import dotenv from "dotenv";
import faunadb from "faunadb";
dotenv.config();

const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
  domain: process.env.FAUNA_DB_DOMAIN,
});

const { Get, Match, Index, Update, Ref, Collection } = faunadb.query;
exports.handler = async (event, context) => {
  const doc = await client.query(Get(Match(Index("count_by_custom_id"), 1)));
  const currentCount = doc.data.amount;
  const countRefId = "329396172614533319";

  const doc2 = await client.query(
    Update(Ref(Collection("count"), countRefId), {
      data: {
        amount: currentCount - 1,
      },
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify(doc2.data),
  };
};
