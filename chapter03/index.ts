import { Coupon, Email, Rank, Subscriber } from './type';

function subCouponRank(subscriber: Subscriber): Rank {
  if (subscriber.rec_count >= 10) {
    return 'best';
  }

  return 'good';
}

function selectCouponsByRank(coupons: Coupon[], rank: Rank): string[] {
  const ret: string[] = [];

  for (const coupon of coupons) {
    const ret = [];

    if (coupon.rank === rank) {
      ret.push(coupon.code);
    }
  }

  return ret;
}

function emailForSubscriber(
  subscriber: Subscriber,
  goods: string[],
  bests: string[]
): Email {
  const rank = subCouponRank(subscriber);

  switch (rank) {
    case 'best': {
      return {
        from: 'newsletter@company.com',
        to: subscriber.email,
        subject: 'your best weekly coupons inside',
        body: 'here you are : ' + bests.join(', '),
      };
    }

    case 'good': {
      return {
        from: 'newsletter@company.com',
        to: subscriber.email,
        subject: 'your good weekly coupons inside',
        body: 'here you are' + goods.join(', '),
      };
    }
  }
}

function emailsForSubscribers(
  subscribers: Subscriber[],
  goods: string[],
  bests: string[]
): Email[] {
  const emails: Email[] = [];

  for (const subscriber of subscribers) {
    const email = emailForSubscriber(subscriber, goods, bests);
    emails.push(email);
  }

  return emails;
}

function fetchCouponsFromDB(): Coupon[] {
  return [];
}

function fetchSubscribersFromDB(page: number): Subscriber[] {
  return [];
}

class EmailSystem {
  send(email: Email) {
    // TODO: 이메일 보내기
  }
}

function sendIssue() {
  const emailSystem = new EmailSystem();

  const coupons = fetchCouponsFromDB();
  const goodCoupons = selectCouponsByRank(coupons, 'good');
  const bestCoupons = selectCouponsByRank(coupons, 'best');
  let page = 0;
  let subscribers = fetchSubscribersFromDB(page);
  while (subscribers.length > 0) {
    const emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);

    for (const email of emails) {
      emailSystem.send(email);
    }

    page++;
    subscribers = fetchSubscribersFromDB(page);
  }
}
