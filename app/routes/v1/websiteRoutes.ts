import express from "express";
import websiteViewController from "../../viewcontroller/websiteViewController";

const websiteRouter = express.Router()

websiteRouter.route('/therapy').get(websiteViewController.therapyIndex)
websiteRouter.route('/faq').get(websiteViewController.faq)
websiteRouter.route('/blog').get(websiteViewController.blog)
websiteRouter.route('/therapist').get(websiteViewController.therapist)
websiteRouter.route('/therapy/relationship-issues').get(websiteViewController.relationshipIssues)
websiteRouter.route('/therapy/self-esteem-issues').get(websiteViewController.selfEsteemIssues)
websiteRouter.route('/therapy/anxiety-and-grief').get(websiteViewController.anxietyAndGrief)
websiteRouter.route('/therapy/career-counseling').get(websiteViewController.careerCounseling)
websiteRouter.route('/therapy/family-psycology').get(websiteViewController.familyIssues)
websiteRouter.route('/therapy/young-adult-intensive').get(websiteViewController.youndAndAdult)
websiteRouter.route('/therapy/kids-family-psycology').get(websiteViewController.youndAndAdult)
websiteRouter.route('/therapy/individual-issues').get(websiteViewController.youndAndAdult)
websiteRouter.route('/therapy/couple-issues').get(websiteViewController.youndAndAdult)


export default websiteRouter;
